import React from 'react';
import styled from 'styled-components';

import Character from '../components/Character';
import SearchBar from '../components/SearchBar';

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

function Home() {
    return (
        <Container className="root">
          <SearchBar />
          <Character />
        </Container>
    );
  }
  
  export default Home;