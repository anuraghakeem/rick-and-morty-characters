import React from 'react';
import styled from 'styled-components';

import Character from '../components/Character';
import SearchBar from '../components/SearchBar';
import FilterContainer from '../components/FilterContainer';
import SortById from '../components/SortById';

const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`;

function Home() {
    return (
        <Container className="root">
          <FilterContainer />
          <SearchBar />
          <SortById />
          <Character />
        </Container>
    );
  }
  
  export default Home;