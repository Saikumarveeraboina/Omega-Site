import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import {Link, useNavigate} from 'react-router-dom'
import "./index.css";

const Register = () => {
  const Navigate = useNavigate()
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = e.target.elements;

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email.value,
        password.value
      );

      await setDoc(doc(db, "users", res.user.uid), {
        username: username.value,
        email: email.value,
        createdAt: new Date(),
      });

      alert("Registered Successfully 🎉");
      Navigate("/login")
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleRegister}>
        <h2 style={{color: "black" , fontFamily: "-apple-system"}}>Student Register</h2>
         <img src="/logo.png" alt="Login" className="login"  />
        <input name="username" placeholder="Username" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button className="auth-btn">Sign Up</button>
        <p className="para">Already Have an account ? <Link to="/login" className="text" >Login</Link> Here</p>
      </form>
    </div>
  );
};

export default Register;
