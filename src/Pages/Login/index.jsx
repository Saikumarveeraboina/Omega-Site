import {
  signInWithEmailAndPassword,
  signInWithRedirect,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();

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

  // 🔥 MOBILE SAFE GOOGLE LOGIN
  const googleLogin = async () => {
    try {
      await signInWithRedirect(auth, googleProvider);
      // ❌ DO NOT navigate manually
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2 style={{ color: "black" }}>Student Login</h2>

        <img src="/logo.png" alt="Login" className="login" />

        <input name="email" placeholder="Email" required />
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
