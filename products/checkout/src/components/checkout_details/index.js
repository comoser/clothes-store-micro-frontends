import React from 'react';
import styled from 'styled-components';
import AsyncLoader from '../async_loader';
import CheckoutItem from '../checkout_item';

const Wrapper = React.lazy(() => import('shared/Wrapper'));
const Header = React.lazy(() => import('shared/Header'));
const Button = React.lazy(() => import('shared/Button'));

const CheckoutDetails = ({ itemsInCart, setItemsInCart, setNotification }) => {
  const onPurchaseClick = () => {
    setItemsInCart([]);
    setNotification({ type: 'success', message: 'Thank you for your purchase!' });
  }

  return (
    <AsyncLoader>
      <Wrapper>
        <CheckoutDetailsLayout>
          {itemsInCart.map((item) => <CheckoutItem key={item.name} item={item} />)}
          {itemsInCart.length === 0 && (
            <Header style={{ textAlign: 'center' }}>No items in your cart yet!</Header>
          )}
          {itemsInCart.length > 0 && (
            <Button noMargin onClick={onPurchaseClick}>
              Purchase
            </Button>
          )}
        </CheckoutDetailsLayout>
      </Wrapper>
    </AsyncLoader>
  );
};

const CheckoutDetailsLayout = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default CheckoutDetails;
