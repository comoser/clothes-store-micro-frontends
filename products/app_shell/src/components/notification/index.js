import React from 'react';
import styled from 'styled-components';
import AsyncLoader from '../async_loader';

const Body2 = React.lazy(() => import('shared/Body2'));

const Notification = ({ notification }) => {
  if (!notification) return null;

  return (
    <Wrapper notification={notification}>
      <AsyncLoader>
        <Body2>{notification.message}</Body2>
      </AsyncLoader>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60px;
  width: 250px;
  position: absolute;
  top: 120px;
  right: 30px;
  display: flex;
  justify-content: center;
  padding-top: 25px;
  border-radius: 2px;
  background-color: ${({ notification }) => notification.type === 'success' ? '#78dc78' : '#d98a8a'};
`;

export default Notification;
