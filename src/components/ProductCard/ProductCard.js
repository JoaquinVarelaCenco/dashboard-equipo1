import "./ProductCard.css";
import leftArrow from '../../assets/images/chevron-right.svg'
import { Link } from "react-router-dom";
import Spinner from '../Spinner/Spinner';
import { useState } from "react";
import noImage from '../../assets/images/no-image.jpeg'

const ProductCard = ({ title, image, id }) => {
  const [imagePlaceHolder, setImagePlaceHolder] = useState(false);
  const [hideImage, setHideImage] = useState("hideImage")
  const [hideSpinner, setHideSpinner] = useState("showSpinner")

  const imageLoaded = ()=>{
    setImagePlaceHolder(true);
    setHideImage("showImage");
    setHideSpinner("hideSpinner");
  }

  if(image == undefined || image ==null){
    image = noImage;
  }

  return (
    <Link to={`/products/${id}`} className="product-card-link">
      <article className="main-product__related-product-card">
      <div className="main-product__imageAndDesc">
          <div className="section-article__image">
            <img
            src={image}
            alt="Imagen de producto"
            className={`imagenPrincipal ${hideImage}`}
            onLoad={imageLoaded}
          />
            <div className={`spinnerWrapper ${hideSpinner}`}>
              <Spinner />
            </div>
        </div>
          <div className="section-article__desc">
            <div className="desc">
              <p>{title}</p>
            </div>

            <div className="section-article__price">
              <p className="valorNumerico" data-testid="id-product">#{id}</p>
            </div>
          </div>
      </div>
      <div className="section-article__goToProduct">
        <img src={leftArrow} alt="" />
      </div>
    </article>
    </Link>
  );
};

export default ProductCard;
