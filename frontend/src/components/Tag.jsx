import { useNavigate } from 'react-router-dom'

function Tag(props) {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate('/category/'+props.name)
      }

  return (
    <li key={props.id} onClick={clickHandler}>{props.name}</li>
  )
}

export default Tag