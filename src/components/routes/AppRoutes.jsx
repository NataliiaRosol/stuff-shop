import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import { ROUTES } from "../../utils/routes";
import SingleProduct from "../Products/SingleProduct";


export default function AppRoutes (){

  return(
    <Routes>
      <Route index element={<Home/>} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct/>} />
    </Routes>
  )
}