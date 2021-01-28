import styled from 'styled-components';
import { textPrimary } from '../../constants';

const Body = styled.p`
  font-size: ${({ highlight }) => highlight ? 1.6 : 1.2}rem;
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
  margin-bottom: ${({ padding }) => padding ? 40 : 0}px;
  color: ${textPrimary};
`;

export default Body;
