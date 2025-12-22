import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./assets/Header";
import ProtectedRoute from "./routes/ProtectedRoute";
import Loader from "./assets/Spinner";

// Lazy loaded pages
const Home = lazy(() => import("./assets/Home"));
const Materials = lazy(() => import("./assets/Materials"));
const Syllabus = lazy(() => import("./assets/Syllabus"));
const About = lazy(() => import("./assets/About"));
const Contact = lazy(() => import("./assets/Contact"));

const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const ResetPassword = lazy(() => import("./Pages/ResetPass"));

const App = () => {
  return (
    <div className="app-layout">
      <Header />

      {/* Suspense wrapper */}
      <Suspense fallback={<Loader />}>
        <main className="page-content">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-pass" element={<ResetPassword />} />

            {/* Protected routes */}
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
      </Suspense>
    </div>
  );
};

export default App;
