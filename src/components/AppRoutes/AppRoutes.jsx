import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import AllCampersPage from "../../pages/AllCampersPage/AllCampersPage";
import CamperPage from "../../pages/CamperPage/CamperPage";
// import CamperPage from "../../pages/CamperPage/CamperPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<AllCampersPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/catalog/:camperId" element={<CamperPage />} />
    </Routes>
  );
};

export default AppRoutes;
