import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

function Sidebar() {
  const [tags, setTags] = useState([])

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
          <li>Trending</li>
          <div>
              <li><span>All Categories</span></li>
              {tags.map((tag) => {
                  return (
                  <div key={tag.id}>
                      <li>{tag.name}</li>
                  </div>
                  );
              })}
          </div>
          <li>About</li>
          <li>Submit</li>
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
  border-right: 1px solid #e6e6e6;

  h3 {
    padding: 0 0.5rem;
  }

  ul {
    margin: inherit;
    padding: 0 0.5rem;
    list-style-type: none;

    li {
      margin-top: 0.5rem;
    }
  }
` 