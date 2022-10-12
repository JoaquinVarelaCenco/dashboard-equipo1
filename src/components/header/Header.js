import "./Header.css";
import { useContext, useEffect, useRef, useState } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { useLocation, Link } from "react-router-dom";
import menuImage from "../../assets/images/menu.svg";
import { SideBarContext, SideBarProvider } from "../../context/SideBarContext";
import { ThemeContext } from "../../context/ThemeContext";
import HeaderProducts from "../HeaderProducts/HeaderProducts";
import HeaderEditAddProduct from "../HeaderEditAndAddProduct/HeaderEditAddProduct";
import Button from "../Button/Button";

const Header = () => {
  let buttonMenu = useRef();

  //Contextos : tema - page
  const { theme } = useContext(ThemeContext);
  const { toggleVisibility } = useContext(SideBarContext);
  const { page, currentPage, titleContainer, currentTitleContainer } = useContext(HeaderContext);
  const location = useLocation();
  
  //USe effect para setear la url en la que me encuentro
  useEffect(() => {
    currentPage(location.pathname);
    currentTitleContainer("displayFlex")
  }, [location]);
  
  let pageTitle = "¡Hola Olivia!";
  let productId = "";
  let titleLink = "/home";
  let id =0

  //Lógica para establecer el pathname en que nos encontramos
  if (page === "/products") {
    pageTitle = "Products";
    titleLink =page;
  } else if (page.includes("/stores")) {
    pageTitle = "Tiendas";
    titleLink =page;
  } else if (page === "/products/new") {
    pageTitle = "Productos";
    titleLink ="/products";
  } else if (page.includes("/products/")) {
    pageTitle = "Productos";
    titleLink ="/products";
    productId = "#" + location.pathname.split("/")[2];
    id = location.pathname.split("/")[2];
  }

  return (
    <div className={`header ${theme}`}>
      <div className={`headerGeneric ${titleContainer}`}>
        

        <Button 
          click={() => {toggleVisibility()}}
          classN={"header__hamburguer-menu-btn"}
          ref={buttonMenu}
        >
          <img
            src={menuImage}
            alt="Menú hamburguesa"
            className="header__hamburguer-menu-img"
          />
        </Button>
        <div className="title">
          <Link to={titleLink}><h2>{pageTitle}</h2></Link>
        </div>
      </div>

      {page === "/products" ? (
        <HeaderProducts/>
      ) : page === "/products/new" ? (
        <HeaderEditAddProduct productContent="Nuevo Producto" editProduct={false}/>
      ) : page.includes("/products/") ? (
        <HeaderEditAddProduct productContent={id} editProduct={true}/>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
