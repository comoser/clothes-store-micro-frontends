import React, { useState } from 'react';
import Notification from '../notification';

import { useCheckoutCart } from 'shared/Utils';

const GlobalState = ({ children }) => {
  const [itemsInCart, setItemsInCart] = useCheckoutCart();
  const [notification, setNotification] = useState(null);

  const setNotificationWrapper = (notification) => {
    setNotification(notification);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  }

  return (
    <>
      <Notification notification={notification} />
      {children(itemsInCart, setItemsInCart, setNotificationWrapper)}
    </>
  );
};

export default GlobalState;
