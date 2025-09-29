import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import LogIn from "./pages/Log In/LogIn.jsx";
import Main from "./pages/Main/Main.jsx";


function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<h1>О сайте</h1>} />
      </Routes>
    </div>
  );
}

export default AppRouter;
