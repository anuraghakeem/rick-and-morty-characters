import React from 'react';

import { ResetButtonConatiner } from './resetButtonStyle';

const resetSearchValue = () => {
    window.location.reload();
  };

function ResetButton() {
    return (
      <ResetButtonConatiner>
        <button className="danger" type="button" onClick={resetSearchValue}>
          Reset All
        </button>
      </ResetButtonConatiner>
    );
  }
  
  export default ResetButton;