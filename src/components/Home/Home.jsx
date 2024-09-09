import { useDispatch, useSelector } from "react-redux";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { useEffect } from "react";
import { filterByPrice } from "../../features/products/productSlice";


export default function Home(){
  const dispatch = useDispatch();
  const { categories, products: {list, filtered} } = useSelector((state) => state);
  // let productsList = products.list.products;  

  useEffect(()=> {
    if(!list.products?.length) return;

    dispatch(filterByPrice(20))
  }, [dispatch, list.products?.length]);
  
  

  return(
    
    <>
      <Poster/>
      <Products products={list.products} amount={5} title='Trending'/>
      <Categories products={categories.list} amount={5} title='Worth seeing'/>
      <Banner/>
      <Products products={list.products} amount={5} title='Less than 100$'/>
    </>
  )
}