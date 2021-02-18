import styled from "styled-components";

export const MenuList = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 678px) {
    display: none;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex: 1;
  padding: 3px;
  background-color: black;
  color: white;
  position: sticky;
  top: 0px;

  @media screen and (max-width: 678px) {
    display: flex;
    flex: 1;
    margin: 0 auto;
    justify-content: space-around;
    background-color: black;
    align-items: center;
  }
`;

export const Logo = styled.h1`
    font-size: 1rem;
    background-color: {color => color === 'black' ? 'yellow' : 'blue'}
     
    @media screen and (max-width: 678px) {
     

    }
`;  
