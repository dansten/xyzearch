import Products from "../components/Products";
import styled from 'styled-components';

import React from 'react'

function Home() {
  return (
    <HomeWrapper>
        <Products />
    </HomeWrapper>
  )
}

export default Home

const HomeWrapper = styled.div`
  position: relative;
`
