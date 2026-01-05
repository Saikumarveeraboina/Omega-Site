import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

import Header from "./assets/Header";
import AdminRoute from "./Pages/AdminRoute";
import Loader from "./assets/Spinner";

// 🔹 Lazy loaded public pages
const Home = lazy(() => import("./assets/Home"));
const About = lazy(() => import("./assets/About"));
const Contact = lazy(() => import("./assets/Contact"));

// 🔹 Lazy loaded student pages
const Materials = lazy(() => import("./assets/Materials"));
const Syllabus = lazy(() => import("./assets/Syllabus"));
const Notices = lazy(() => import("./Pages/Notices"));

// 🔹 Auth pages
const Login = lazy(() => import("./Pages/Login"));
const Register = lazy(() => import("./Pages/Register"));
const ResetPassword = lazy(() => import("./Pages/ResetPass"));


// 🔹 Admin pages
const AdminNotice = lazy(() => import("./Pages/AdminNotice"));

const App = () => {
  return (
    <div className="app-layout">

      <Header />

      <Suspense fallback={<Loader />}>
        <main className="page-content">
          <Routes>
            {/* ================= PUBLIC ROUTES ================= */}
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset-pass" element={<ResetPassword />} />



            
           

            {/* ================= ADMIN PROTECTED ROUTES ================= */}
            <Route
              path="/admin/notices"
              element={
                <AdminRoute>
                  <AdminNotice />
                </AdminRoute>
              }
            />
          </Routes>
        </main>
      </Suspense>
    </div>
  );
};

export default App;
