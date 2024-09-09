import { useDispatch } from "react-redux"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import AppRoutes from "./components/routes/AppRoutes"
import Sidebar from "./components/Sidebar/Sidebar"
import { useEffect } from "react"
import { getCategories } from "./features/categories/categoriesSlice"
import { getProducts } from "./features/products/productSlice"


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getCategories());
    dispatch(getProducts());
  }, [])
  

  return (
    <div className="app">
      <Header />
      
      <div className="container">
        <Sidebar/>
        <AppRoutes/>
      </div>

      <Footer />
      
    </div>
    
  ) 
}

export default App
