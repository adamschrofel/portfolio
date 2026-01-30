import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Layout } from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
