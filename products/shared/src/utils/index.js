import { useState, useEffect } from 'react';

const ITEMS_IN_CART_KEY = 'itemsInCart';

const readFromStorage = (key) => {
  let data = null;

  try {
    data = JSON.parse(window.localStorage.getItem(key));
  } catch (e) {
    console.error(`could not get ${key} from storage`);
  }

  return data;
}

const setInStorage = (key, data) => {
  try {
    window.localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error(`could not set ${key} with ${data} in storage`);
  }
};

const useCheckoutCart = (initialItems = readFromStorage(ITEMS_IN_CART_KEY)) => {
  const [itemsInCart, setItemsInCart] = useState(initialItems || []);

  useEffect(() => {
    setInStorage(ITEMS_IN_CART_KEY, itemsInCart);
  }, [itemsInCart]);

  return [itemsInCart, setItemsInCart];
}

export { useCheckoutCart };
