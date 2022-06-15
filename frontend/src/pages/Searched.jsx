import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function Searched() {
  const [searchedProducts, setSearchedProducts] = useState([]);
  let params = useParams()

  const getSearched = async (query) => {
    const api = await fetch(
      `http://127.0.0.1:8000/api/products/custom?search=${query}`
    );
    const data = await api.json();
    console.log(data)
    setSearchedProducts(data);
  };

  useEffect(() => {
    getSearched(params.q);
  }, [params.q]);

  return (
    <div>
      <h3>Search results</h3>
      {searchedProducts.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.likes.length}</p>
            <small>{product.tags}</small>
          </div>
        );
      })}
    </div>
  );
}

export default Searched;
