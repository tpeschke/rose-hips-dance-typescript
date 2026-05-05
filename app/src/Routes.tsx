import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";

export default function AllRoutes() {
    return (
        <Routes>
            <Route index element={
                <Home />
            } />
            <Route path="*" element={<Navigate to='/' replace />} />
        </Routes>
    )
}