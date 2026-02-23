import { BrowserRouter, Routes, Route } from "react-router";

// layouts
import MainLayout from "../layouts/MainLayout";

// public pages
import Home from "../pages/public/Home";
<<<<<<< HEAD
import LoginPage from "../pages/public/login";
=======
import Login from "../pages/public/Login";
>>>>>>> 3393dd9892fe9cafa96c2292fbe6b31018ee24ee


const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                {/* public */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />}/>
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
    </BrowserRouter>
    </> 
  )
}

export default Router