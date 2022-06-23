import { useEffect, useState, useContext } from 'react';
import AuthContext from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import Tag from './Tag';

function Sidebar() {
  const [tags, setTags] = useState([])
  let { user } = useContext(AuthContext)

    // TODO: Implement search function, http://127.0.0.1:8000/api/products/custom/?search=
    const getTags = async () => {
        const api = await fetch("http://127.0.0.1:8000/api/tags/");
        const data = await api.json();
        setTags(data);
    };
    useEffect(() => {
        getTags();
    },[])

  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/')
  }

  return (
    <StyledSidebar>
      <h3 onClick={navigateHome}>XYZearch</h3>
      <ul>
          <li>All Categories</li>
          <div>
            {tags.map((tag) => {
                return (
                  <Tag key={tag.id} {...tag} />
                );
            })}
          </div>
          {user ? (
            <li onClick={() => navigate('/submit')}>Submit</li>
          ) : (
            <li onClick={() => navigate('/signin')}>Submit</li>
          )}
      </ul>
    </StyledSidebar>
  )
}

export default Sidebar

const StyledSidebar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  top: 0px;
  position: sticky;
  overflow: hidden;
  border-right: 1px solid #454760;
  padding: 0 24px 0 12px;

  h3 {
    padding: 0 0.5rem;
    cursor: pointer;
  }

  ul {
    padding: 0 0.5rem;
    list-style-type: none;

    li {
      margin-top: 0.75rem;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;
    }
    li:hover {
      color: #f35b5b;
    }

    div li {
      padding-left: 10px;
    }
  }
` 