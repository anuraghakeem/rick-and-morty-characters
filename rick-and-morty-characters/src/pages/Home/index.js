import React from 'react';

import Character from '../../components/Character';
import SearchBar from '../../components/SearchBar';
import FilterContainer from '../../components/FilterContainer';
import SortById from '../../components/SortById';
import ResetButton from '../../components/ResetButton';

import {Container,FilterPlaceholder, ContentPlaceholder, SortPlaceholder} from './homeStyle'

function Home() {
    return (
        <Container className="home-page">
          <FilterPlaceholder className="filter-placeholder">
            <FilterContainer />
          </FilterPlaceholder>
          <ContentPlaceholder className="content-placeholder">
          <SearchBar />
          <SortPlaceholder className={"sort-by-id"}>
            <SortById />
          </SortPlaceholder>
          <ResetButton />
          <Character />
          </ContentPlaceholder>
        </Container>
    );
  }
  
  export default Home;