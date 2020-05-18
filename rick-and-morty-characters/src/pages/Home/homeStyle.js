import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(rgba(255,255,255,.9), rgba(255,255,255,0.9)), url('https://i.pinimg.com/736x/73/27/12/73271207d1dabe204a34a9c2e7b6c46e.jpg');
  margin: auto;
`;

export const SortPlaceholder = styled.div`
`;

export const FilterPlaceholder = styled.div`
@media (min-width: 1025px) {
    position:fixed;
    width:396px;
    left:0;
    top:0;
    margin-top:10px;
  }
`;

export const ContentPlaceholder = styled.div`
@media (min-width: 1025px) {
    margin-left: 397px;
    .sort-by-id{
      position: absolute;
      width:200px;
      right:10px;
      top:10px;
    }
  }
`;