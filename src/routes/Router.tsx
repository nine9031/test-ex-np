import { BrowserRouter, Routes, Route } from "react-router";

// layouts
import MainLayout from "../layouts/MainLayout";

// public pages
import Home from "../pages/public/Home";


const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                {/* public */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router