import { Routes, Route } from "react-router-dom";

import User from "../pages/User";
import Home from "../pages/Home";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default AppRoutes;
