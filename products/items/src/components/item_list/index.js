import React from 'react';
import styled from 'styled-components';
import items from '../../fixtures/items';
import ItemListItem from '../item_list_item';

const ItemList = () => {
  return (
    <Wrapper>
      <ItemListLayout>
        {items.map(item => <ItemListItem key={item.name} item={item} />)}
      </ItemListLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  min-height: 100%;
`;

const ItemListLayout = styled.div`
  padding: 30px 0;
`;

export default ItemList;
