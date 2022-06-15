import { useEffect, useState } from 'react';

function Products() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts();
    },[])

    
    const getProducts = async () => {
        const api = await fetch("http://127.0.0.1:8000/api/products/");
        const data = await api.json();
        setProducts(data);
    };
    

  return (
    <div>
      {products.map((product) => {
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
  )
}

export default Products