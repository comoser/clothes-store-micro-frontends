import React from 'react';
import styled from 'styled-components';
import items from '../../fixtures/items';
import ItemListItem from '../item_list_item';
import AsyncLoader from '../async_loader';

const Wrapper = React.lazy(() => import('shared/Wrapper'));

const ItemList = () => {
  return (
    <AsyncLoader>
      <Wrapper>
        <ItemListLayout>
          {items.map(item => <ItemListItem key={item.name} item={item} />)}
        </ItemListLayout>
      </Wrapper>
    </AsyncLoader>
  );
};

const ItemListLayout = styled.div`
  padding: 30px 0;
`;

export default ItemList;
