import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import "./index.css"

const ResetPassword = () => {
  const reset = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent 📩");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={reset}>
        <h2 style={{color: "black"}}>Reset Password</h2>
        <input name="email" placeholder="Email" required />
        <button className="auth-btn">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ResetPassword;
