import Search from './Search'
import styled from "styled-components";

function Navbar() {
    return (
        <NavStyle>
            <div className='navSearch'>
                <Search />
                <button>Sign Up</button>
            </div>
        </NavStyle>
    )
}

export default Navbar

const NavStyle = styled.div`
  position: sticky;
  top: 0px;
  background-color: white;
  border-bottom: 1px solid #e6e6e6;
  padding: 1rem 0;
  display: flex;
  margin-bottom: 24px;
  z-index: 40;

  .navSearch {
    margin-left: auto;
    margin-right: auto;
    display: inline-flex;
    max-width: 1012px;

  }
}
` 