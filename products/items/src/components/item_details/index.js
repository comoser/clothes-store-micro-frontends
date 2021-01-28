import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import items from '../../fixtures/items';
import AsyncLoader from '../async_loader';

const CardContainer = React.lazy(() => import('shared/CardContainer'));
const Wrapper = React.lazy(() => import('shared/Wrapper'));
const Header = React.lazy(() => import('shared/Header'));
const Body = React.lazy(() => import('shared/Body'));
const Body2 = React.lazy(() => import('shared/Body2'));
const Button = React.lazy(() => import('shared/Button'));

const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items.find(item => item.id === Number(itemId));

  return (
    <AsyncLoader>
      <Wrapper>
        <ItemDetailsLayout>
          <StyledImg src={item.imgUrl} />
          <CardContainer>
            <Header>{item.name}</Header>
            <Body>{item.description}</Body>
            <Body2 padding>{item.longDescription}</Body2>
            <Body padding highlight>{item.price}</Body>
            <Button>Add to Cart</Button>
          </CardContainer>
        </ItemDetailsLayout>
      </Wrapper>
    </AsyncLoader>
  );
};

const ItemDetailsLayout = styled.div`
  display: flex;
  margin: 30px 0;
  flex-direction: row;
  @media (max-width: 890px) {
    flex-direction: column;
    margin: 0;
  }
`;

const StyledImg = styled.img`
  height: 635px;
  width: 340px;
  object-fit: cover;
  border-radius: 2px;
  @media (max-width: 890px) {
    height: 435px;
    width: 100%;
  }
`;

export default ItemDetails;
