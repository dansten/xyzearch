import React, {useContext} from 'react'
import Search from './Search'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext'

function Navbar() {
  let {user, logoutUser} = useContext(AuthContext)
  const navigate = useNavigate()
  return (
      <NavStyle>
          <div className='navSearch'>
              <Search />
              {user ? (
                <p onClick={logoutUser}>Sign Out</p>
              ): (
                <>
                  <p onClick={() => navigate('/signin')}>Sign In</p>
                  <button onClick={() => navigate('/signup')}>Sign Up</button>
                </>
              )}
          </div>
      </NavStyle>
  )
}

export default Navbar

const NavStyle = styled.div`
  position: sticky;
  top: 0px;
  background-color: #151625;
  border-bottom: 1px solid #454760;
  padding: 1rem 0;
  display: flex;
  margin-bottom: 24px;
  z-index: 40;

  .navSearch {
    margin-left: auto;
    margin-right: auto;
    display: inline-flex;
    max-width: 1012px;
    align-items: center;

  }
  p {
    margin-right: 40px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  p:hover {
    color: #f35b5b;
  }
  button {
    background-color: #f35b5b;
    border: 1px solid #454760;
    border-radius: 5px;
    padding: 0.75rem 0.75rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover {
    border: 1px solid #575a76;
  }
}
` 