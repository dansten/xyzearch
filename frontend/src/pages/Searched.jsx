import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { ProductWrapper } from '../components/Products'
import Product from "../components/Product";

function Searched() {
  const [searchedProducts, setSearchedProducts] = useState([]);
  let params = useParams()

  const getSearched = async (query) => {
    const api = await fetch(
      `http://127.0.0.1:8000/api/products/custom/?search=${query}`
    );
    const data = await api.json();
    setSearchedProducts(data);
  };

  useEffect(() => {
    getSearched(params.q);
  }, [params.q]);

  return (
    <ProductWrapper>
      <div className="productContainer">
        {searchedProducts.map((product) => {
          return (
            <Product key={product.id} {...product}/>
          );
      })}
      </div>
    </ProductWrapper>
  );
}

export default Searched;
