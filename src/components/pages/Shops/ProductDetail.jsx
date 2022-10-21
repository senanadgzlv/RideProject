import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoriesItems } from "../../../Data/Data";
import ProductItem from "../Homecomponents/Productitem";
import Productdetaltem from "./Productdetaltem";
const ProductDetail = () => {
  const { id } = useParams();

  const [productDetail, setProductDetail] = useState({});

  const getData = () => {
    const foundProduct = categoriesItems.find((product) => {
      return product.id === parseInt(id);
    });

    setProductDetail(foundProduct);
    // console.log(productDetail);
  };

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);
  return (
 <Productdetaltem />
  );
};

export default ProductDetail;