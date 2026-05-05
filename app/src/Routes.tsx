import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/page";

export default function AllRoutes() {
    return (
        <Routes>
            <Route index element={
                <Home />
            } />
            <Route path="contact" element={
                <Contact />
            } />
            <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
    )
}