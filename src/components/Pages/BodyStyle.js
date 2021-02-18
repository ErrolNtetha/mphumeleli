import styled from "styled-components";

export const Body = styled.div`
  padding: 40px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const Button = styled.button`
  /* color: white;
  padding: 8px;
  background-color: purple;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.8rem;
  outline: none;
  border: none;
  font-weight: bold; */
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    color: black;
    border-color: black;
    border-width: 3px;
    background-color: white;
  }
`;

export const Skills = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export const About = styled.section`
  padding: 10px;
  text-align: center;
  background-color: black;
  color: white;

  @media screen and (max-width: 720px) { 
    background-image: url("../logo-1.svg");
    background-repeat: none;
  }
`;
