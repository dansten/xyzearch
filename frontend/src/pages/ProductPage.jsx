import React from "react";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

function ProductPage() {
    const [product, setProduct] = useState([]);
    let params = useParams()

    const getProduct = async (name) => {
        const api = await fetch(
            `http://127.0.0.1:8000/api/products/${name}` 
        )
        const data = await api.json()
        setProduct(data);
    }

    useEffect(() => {
        getProduct(params.name);
      }, [params.name]);

  return (
    <div>{product.name}</div>
  )
}

export default ProductPage