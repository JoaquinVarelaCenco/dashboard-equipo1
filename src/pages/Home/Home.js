import React, { useState} from 'react';
import { getProducts } from '../../services/apiServices';
import HomeCard from '../../components/HomeCard/HomeCard';

import './Home.css'
import box from '../../assets/images/package-variant-closed.svg';
import store from '../../assets/images/store.svg';

const Home = () => {

  const [ totalProducts, setTotalProducts ] = useState(0);
  
    getProducts()
    .then((res)=>{
      setTotalProducts(res.length)
    })
    .catch((error)=>{
      console.log(error);
    });


  return (
    <>

      <HomeCard 
        count={totalProducts}
        title={"Productos"}
        linkBtnList= {"/products"}
        textBtnAdd = {"Agregar Producto"}
        linkBtnAdd = {"/products/new"}
        img = {box}
      />

      <HomeCard 
        count={12}
        title={"Tiendas"}
        linkBtnList= {"/stores"}
        textBtnAdd = {"Agregar Tiendas"}
        linkBtnAdd = {"/stores/new"}
        img = {store}
      />

    </>
  )
}

export default Home