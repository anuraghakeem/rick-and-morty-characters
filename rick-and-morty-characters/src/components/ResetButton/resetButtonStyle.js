import styled from 'styled-components';

export const ResetButtonConatiner = styled.div`
margin-top:30px;

button {
    width: 100%;
    min-width: 113px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    outline: none;
    padding: 15px 0;
  }

button.danger {
    background-color: #dc3547;
    color: #fff;

    &:hover {
      background-color: #c53141;
    }
  }
  @media (min-width: 1025px) {
    width: 300px;
    position:absolute;
    right:10px;
    margin-top: 0;
  }
`;