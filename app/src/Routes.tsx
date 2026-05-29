import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/page";
import Classes from "./pages/classes/page";
import RegistrationNoClass from "./pages/classes/registration/page";
import Registration from "./pages/classes/registration/[className]/page";
import Welcome from "./pages/classes/welcome/page";
import Testimonials from "./pages/testimonials/Testimonials";

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
            <Route path="classes/welcome" element={
                <Welcome />
            } />
            <Route path="classes/registration" element={
                <RegistrationNoClass />
            } />
            <Route path="classes/registration/:classTitle" element={
                <Registration />
            } />
            <Route path="testimonials" element={
                <Testimonials />
            } />
            <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
    )
}