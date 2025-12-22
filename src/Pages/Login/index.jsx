import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();

  // 🔹 Handle Google redirect result (for mobile)
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result) {
          alert("Google Login Success 🚀");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      alert("Login Success ✅");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  // 🔹 Google login (popup for desktop, redirect for mobile)
  const googleLogin = async () => {
    try {
      const isMobile = /iPhone|Android/i.test(navigator.userAgent);

      if (isMobile) {
        await signInWithRedirect(auth, googleProvider);
      } else {
        await signInWithPopup(auth, googleProvider);
        alert("Google Login Success 🚀");
        navigate("/");
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2 style={{ color: "black", fontFamily: "-apple-system" }}>
          Student Login
        </h2>

        <img src="/logo.png" alt="Login" className="login" />

        <input name="email" placeholder="Email" />
        <input name="password" type="password" placeholder="Password" />

        <button className="auth-btn" type="submit">
          Login
        </button>

        <button
          type="button"
          className="auth-btn google-btn"
          onClick={googleLogin}
        >
          Continue with Google
        </button>

        <p className="para">
          Don’t have an account?{" "}
          <Link to="/register" className="text">
            Register
          </Link>
        </p>

        <Link to="/reset-pass">Forgot password</Link>
      </form>
    </div>
  );
};

export default Login;
