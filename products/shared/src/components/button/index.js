import styled from 'styled-components';
import { primary, primaryDark } from '../../constants';

const Button = styled.button`
  color: #fff;
  background-color: ${primary};
  border-radius: 2px;
  transition: background-color 200ms;
  padding: 20px 40px;
  border: none;
  font-size: 1.2rem;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    background-color: ${primaryDark};
  }
  @media (max-width: 890px) {
    padding: 10px 20px;
  }
`;

export default Button;
