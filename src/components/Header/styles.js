import styled from "styled-components";

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #1a202c;
  box-shadow: 0 0 20px 3px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999; /* Defina um valor alto para garantir que fique por cima de outros elementos */

  > svg {
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
`;
