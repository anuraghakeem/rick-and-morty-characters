import styled from 'styled-components';

export const CardStyle = styled.article`
  width: 155px;
  height: 670px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
  box-shadow: 0px 10px 1px #ddd, 0 10px 20px #ccc;
  box-sizing: border-box;

  figure {
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 10%;
    box-shadow: 0 10px 20px #ccc;
    margin: 10px auto;

    img {
      width: 100%;
    }
  }
@media (min-width: 1023px) {
    width: 220px
}
@media (min-width: 1365px) {
    width: 200px;
}
@media (min-width: 1919px) {
    width: 350px;
    padding:15px 40px;
    figure{
      width: 150px;
      height: 150px;
    }
}
`;

export const CardContent = styled.div`
  align-self: flex-start;
  margin-top: 40px;
`;
