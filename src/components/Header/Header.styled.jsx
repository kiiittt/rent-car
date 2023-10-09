import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 40px;
  margin: 0;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 6px;
`;


export const NavigationLink = styled(Link)`
    font-size: 30px;
    color: black;
    text-decoration: none;
    cursor: pointer;
  `;