import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: ${({ horizontal }) => horizontal ? 'row' : 'column'};
  flex: 1;
  padding: ${({ noPadding }) => noPadding ? 0 : '0 60px'};
  @media (max-width: 890px) {
    padding: ${({ noPadding }) => noPadding ? 0 : '30px'};
  }
`;

export default CardContainer;
