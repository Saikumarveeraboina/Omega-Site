import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./index.css"


const Login = () => {
 const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;

    try {
      await signInWithEmailAndPassword(auth, email.value, password.value);
      alert("Login Success ✅");
        navigate("/");   // or "/"

    } catch (err) {
      alert(err.message);
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Google Login Success 🚀");
        navigate("/");   // or "/"
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleLogin}>
        <h2 style={{color: "black" , fontFamily: "-apple-system"}}>Student Login</h2>
        <img src="/logo.png" alt="Login" className="login"  />
        <input name="email" placeholder="Email" style={{border: "1px" }}/>
        <input name="password" type="password" placeholder="Password" />
        <button className="auth-btn" type="submit">Login</button>
        <button
          type="button"
          className="auth-btn google-btn"
          onClick={googleLogin}
        >
          Continue with Google
        </button>
        <p className="para">Dont Have an Account <Link to="/register" className="text"> Register</Link></p>
        <Link to="/reset-pass" >Forgot password</Link>
      </form>
    </div>
  );
};

export default Login;
