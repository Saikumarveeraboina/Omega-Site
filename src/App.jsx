import { Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import Syllabus from "./assets/Syllabus";
import Materials from "./assets/Materials";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Header from "./assets/Header";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPass";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <div className="app-layout">
      <Header />

      <main className="page-content">
        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-pass" element={<ResetPassword />} />

          {/* Protected */}
          <Route
            path="/materials"
            element={
              <ProtectedRoute>
                <Materials />
              </ProtectedRoute>
            }
          />
          <Route
            path="/syllabus"
            element={
              <ProtectedRoute>
                <Syllabus />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
