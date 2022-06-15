import styled from 'styled-components';

function Product(props) {
  return (
    <ProductStyle>
      <div className='leftProduct'>
        <h3>{props.name}</h3>
        <h5>{props.description}</h5>
        {/* <small>{props.tags}</small> */}
        <p>NFT, DAO</p>
      </div>
      <div>
        <button>Like</button>
        <p>{props.likes.length}</p>
      </div>
    </ProductStyle>
  )
}

export default Product

const ProductStyle = styled.div`
    height: 320px;
    border-radius: 10px;
    height: 320px;
    border: 1px solid #e6e6e6;
    display: grid;
    grid-template-columns: 4fr 1fr;
    text-align: center;
`