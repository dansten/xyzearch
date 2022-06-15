import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Product from './Product';

function Products() {
    const [products, setProducts] = useState([])

    const getProducts = async () => {
        const api = await fetch("http://127.0.0.1:8000/api/products/");
        const data = await api.json();
        // Sort the data by most likes
        data.sort(function(a,b) {
          return b.likes.length - a.likes.length
        })
        setProducts(data);
    };
    
    useEffect(() => {
      getProducts();
    },[])

  return (
    <ProductWrapper>
      <div className="productContainer">
        {products.map((product) => {
          return (
            <Product key={product.id} {...product}/>
          );
        })}
      </div>
    </ProductWrapper>
  )
}

export default Products

const ProductWrapper = styled.div`
  display: flex;

  .productContainer {
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: 24px;
    max-width: 1012px;
    margin-left: auto;
    margin-right: auto;
  }
`