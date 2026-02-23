import { BrowserRouter, Routes, Route } from "react-router";

// layouts
import MainLayout from "../layouts/MainLayout";

// public pages
import Home from "../pages/public/Home";
import Login from "../pages/public/Login";


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
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router