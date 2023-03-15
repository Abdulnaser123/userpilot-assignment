import React from 'react';
import styles from './container.module.css';
import {Typography} from '@material-ui/core';

const UserDetails = ({props}) => {
  return (
    <div className={styles.container}>
      <div className={styles.HeaderContainer} style={{}}>
        <div className={styles.image}>
          <img
            src={props.userPicture.large}
            alt={`${props.userName.first} ${props.userName.last}`}
          />
        </div>
        <Typography variant="h6" className={styles.info}>
          <div className={styles.name}>
            {props.userName.first} {props.userName.last}
          </div>
          <div className={styles.location}>
            {props.location.street.number} {props.location.street.name}
            {props.location.city}
            {props.location.state}
          </div>
        </Typography>
      </div>
    </div>
  );
};

export default UserDetails;
