import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch } from 'react-router-dom';

const ItemListItem = ({ item }) => {
  const { url } = useRouteMatch();

  return (
    <ItemListItemLayout>
      <Link to={`${url}/details/${item.id}`}>
        <StyledImg src={item.imgUrl} />
      </Link>
      <CardContainer>
        <InfoContainer>
          <Header>{item.name}</Header>
          <Body>{item.description}</Body>
          <Body>{item.price}</Body>
        </InfoContainer>
        <ButtonContainer>
          <Button>
            Add to Cart
          </Button>
        </ButtonContainer>
      </CardContainer>
    </ItemListItemLayout>
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

const CardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
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

const Header = styled.h1`
  font-size: 2rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #444;
`;

const Body = styled.p`
  font-size: 1.2rem;
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
  color: #444;
`;

const Button = styled.button`
  color: #fff;
  background-color: #F03B93;
  border-radius: 2px;
  transition: all 200ms;
  padding: 20px 40px;
  border: none;
  font-size: 1.2rem;
  margin-right: 30px;
  cursor: pointer;
  &:hover {
    background-color: #f00c7b;
  }
`;

export default ItemListItem;
