import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkEl = styled(NavLink)`
  padding: 10px;
  font-weight: 900;
  border-radius: 10px;
  text-decoration: none;
  &.active {
    color: rgb(65, 91, 207);
    background-color: rgb(87, 174, 255);
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 38px 5px rgba(0, 0, 0, 0.5);
  }
`;