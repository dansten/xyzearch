import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'

function Product(props) {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate('/'+props.name)
  }
  return (
    <ProductStyle onClick={clickHandler}>
      <div className='leftProduct'>
        <img src="https://cdn.stamp.fyi/space/snapshot.dcl.eth?s=164" alt={`${props.name} logo`}/>
        <h3>{props.name}</h3>
        <h5>{props.description}</h5>
        {/* <small>{props.tags}</small> */}
        <p>NFT, DAO</p>
      </div>
      <div className='rightProduct'>
        <button onClick={(e) => e.stopPropagation()}>Like</button>
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
    border: 1px solid #454760;
    display: grid;
    grid-template-columns: 4fr 1fr;
    #text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
      border: 1px solid #575a76;

    }

    .leftProduct {
      padding: 1.5rem;
    }

    .rightProduct {
      padding-right: 0.5rem;
      text-align: center;
    }
    
    img {
      min-width: 80px;
      width: 80px;
      height: 80px;
    }
    h5 {
      width: 160px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    button {
      color: white;
      border: 1px solid #454760;
      border-radius: 5px;
      padding: 0.2rem 0.5rem;
      background: none;
      cursor: pointer;
      
    }
    button:hover {
      border: 1px solid #575a76;
      
    }
`