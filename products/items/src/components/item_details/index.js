import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import items from '../../fixtures/items';

const ItemDetails = () => {
  const { itemId } = useParams();
  const item = items.find(item => item.id === Number(itemId));

  return (
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
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  min-height: 100%;
`;

const ItemDetailsLayout = styled.div`
  display: flex;
  margin: 30px 0;
  flex-direction: row;
`;

const StyledImg = styled.img`
  height: 635px;
  width: 340px;
  object-fit: cover;
  border-radius: 2px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0 60px;
`;

const Header = styled.h1`
  font-size: 2rem;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: #444;
`;

const Body = styled.p`
  font-size: ${({ highlight }) => highlight ? 1.6 : 1.2}rem;
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
  margin-bottom: ${({ padding }) => padding ? 40 : 0}px;
  ;
  color: #444;
`;

const Body2 = styled.p`
  font-size: 1rem;
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
  text-align: justify;
  margin-bottom: ${({ padding }) => padding ? 30 : 0}px;
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

export default ItemDetails;
