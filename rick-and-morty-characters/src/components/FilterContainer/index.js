import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Filter from '../Filter'

import { Header, FlexContainer } from './FilterContainerStyle';


export default function FilterContainer() {
  // const filterList = ['Location','Gender']
  const filterList = ['Location','Gender','Episode']
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Header>Filters</Header>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <FlexContainer>
              {filterList.map(filter=><Filter key={filter} name={filter} />)}
            </FlexContainer>
          </ExpansionPanelDetails>
        </ExpansionPanel>
    </div>
    );
  }