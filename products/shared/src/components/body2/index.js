import styled from 'styled-components';
import { textPrimary } from '../../constants';

const Body2 = styled.p`
  font-size: 1rem;
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
  text-align: justify;
  margin-bottom: ${({ padding }) => padding ? 30 : 0}px;
  color: ${textPrimary};
`;

export default Body2;
