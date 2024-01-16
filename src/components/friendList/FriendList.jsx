import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardGroup } from 'react-bootstrap';
import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <CardGroup>
    <Card className={styles.inlineCard.gap}>
      <div className={styles.cardContent}>
        <span className={`status ${isOnline ? 'online' : 'offline'}`}>{isOnline ? 'Online' : 'Offline'}</span>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48"/>
        <p className={styles.name}>{name}</p>
      </div>
    </Card>
  </CardGroup>
);
  
const FriendList = ({ friends }) => (
    <CardGroup>
      <Card>
        {friends.map(friend => <FriendListItem key={friend.id} {...friend} />)}
      </Card>
    </CardGroup>
  );

FriendList.propTypes = {
    friends: PropTypes.array
}

export default FriendList;