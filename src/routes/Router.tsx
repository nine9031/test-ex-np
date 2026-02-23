import { BrowserRouter, Routes, Route } from "react-router";

// layouts
import MainLayout from "../layouts/MainLayout";

// public pages
import Home from "../pages/public/Home";
import LoginPage from "../pages/public/login";


const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                {/* public */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
    </BrowserRouter>
    </> 
  )
}

export default Router