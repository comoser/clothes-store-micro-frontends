import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';
import AsyncLoader from '../async_loader';

const CardContainer = React.lazy(() => import('shared/CardContainer'));
const Header = React.lazy(() => import('shared/Header'));
const Body = React.lazy(() => import('shared/Body'));
const Button = React.lazy(() => import('shared/Button'));

const ItemListItem = ({ item, onAddItem }) => {
  const { url } = useRouteMatch();

  const onAddButtonClick = () => onAddItem(item);

  return (
    <AsyncLoader noLoading>
      <ItemListItemLayout>
        <Link to={`${url}/details/${item.id}`}>
          <StyledImg src={item.imgUrl} />
        </Link>
        <CardContainer horizontal noPadding>
          <InfoContainer>
            <Header>{item.name}</Header>
            <Body>{item.description}</Body>
            <Body>{item.price}</Body>
          </InfoContainer>
          <ButtonContainer>
            <Button onClick={onAddButtonClick}>
              Add to Cart
            </Button>
          </ButtonContainer>
        </CardContainer>
      </ItemListItemLayout>
    </AsyncLoader>
  );
};

const ItemListItemLayout = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  height: 500px;
  background-color: #fff0f2;
  border-radius: 2px;
`;

const StyledImg = styled.img`
  height: 350px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 0 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default ItemListItem;
