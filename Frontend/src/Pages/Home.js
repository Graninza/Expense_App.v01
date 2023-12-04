import React from 'react';
import styled from 'styled-components';



function Home() {
  return (
    <AppStyled>
      <h2>HOME</h2>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(57, 66, 90, 0.56);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3rem;
  }
`;

export default Home;

