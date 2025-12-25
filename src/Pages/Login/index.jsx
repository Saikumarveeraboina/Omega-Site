import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { auth, googleProvider, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();

  // 🔹 Create Firestore user if not exists
  const createUserIfNotExists = async (user) => {
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      await setDoc(ref, {
        username: user.displayName || "Student",
        email: user.email,
        role: "student", // 👈 DEFAULT ROLE
        createdAt: serverTimestamp(),
      });
    }
  };

  // 🔹 Email + Password Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {
      const userCred = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

      await createUserIfNotExists(userCred.user);

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
        const result = await signInWithPopup(
          auth,
          googleProvider
        );

        await createUserIfNotExists(result.user);

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
