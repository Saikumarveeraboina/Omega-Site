import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();

  // 🔹 Email + Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {
      await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );
      alert("Login Success ✅");
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  // 🔹 Google Login (Desktop → Popup | Mobile → Redirect)
  const googleLogin = async () => {
    try {
      const isMobile =
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

      if (isMobile) {
        // 📱 Mobile safe
        await signInWithRedirect(auth, googleProvider);
      } else {
        // 🖥 Desktop safe
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
        <h2 style={{ color: "black" }}>Student Login</h2>

        <img src="/logo.png" alt="Login" className="login" />

        <input
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />

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
          Don’t have an account?
          <Link to="/register" className="text">
            {" "}Register
          </Link>
        </p>

        <Link to="/reset-pass">Forgot password?</Link>
      </form>
    </div>
  );
};

export default Login;
