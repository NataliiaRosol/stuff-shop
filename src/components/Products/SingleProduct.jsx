import { useNavigate, useParams } from "react-router-dom"
import { useGetProductQuery } from "../../features/api/apiSlice";
import { useEffect } from "react";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";


export default function SingleProduct(){

  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({id});
  useEffect(()=> {
    if(!isFetching && !isLoading && !isSuccess) navigate.push(ROUTES.HOME)

  }, [isLoading, isFetching, isSuccess]);
  console.log(data);
  
  

  return(
    !data ? (
      <section className="preloader">
        Loading... 
      </section>)
    :
    <>
      <Product {...data}/>
    </>
  )
}