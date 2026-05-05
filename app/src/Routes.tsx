import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/page";
import Classes from "./pages/classes/page";

export default function AllRoutes() {
    return (
        <Routes>
            <Route index element={
                <Home />
            } />
            <Route path="contact" element={
                <Contact />
            } />
            <Route path="classes" element={
                <Classes />
            } />
            <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
    )
}