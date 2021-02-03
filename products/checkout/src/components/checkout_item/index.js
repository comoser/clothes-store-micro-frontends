import React from 'react';
import styled from 'styled-components';

const CardContainer = React.lazy(() => import('shared/CardContainer'));
const Body = React.lazy(() => import('shared/Body'));
const Body2 = React.lazy(() => import('shared/Body2'));

const CheckoutItem = ({ item }) => {
  return (
    <CheckoutItemLayout>
      <StyledImg src={item.imgUrl} />
      <CardContainer style={{ justifyContent: 'center' }}>
        <Body>{item.name}</Body>
        <Body2>{item.description}</Body2>
        <Body>{item.price}</Body>
      </CardContainer>
    </CheckoutItemLayout>
  );
};

const CheckoutItemLayout = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  border-radius: 2px;
  background-color: #fff0f2;
`;

const StyledImg = styled.img`
  height: 150px;
  width: 180px;
  object-fit: cover;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

export default CheckoutItem;
