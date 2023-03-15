import React, {useState, useEffect} from 'react';
import {Grid, TextField, Typography, Divider} from '@material-ui/core';
import UserCard from '../userCard/UserCard';
import styles from './userList.module.css';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState([
    {
      label: 'Gender',
      value: '',
      onChange: (event) =>
        setSearchParams((prev) => [
          {...prev[0], value: event.target.value},
          prev[1],
        ]),
    },
    {
      label: 'Nationality',
      value: '',
      onChange: (event) =>
        setSearchParams((prev) => [
          prev[0],
          {...prev[1], value: event.target.value},
        ]),
    },
  ]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        `https://randomuser.me/api?results=8&gender=${searchParams[0].value}&nat=${searchParams[1].value}`
      );
      const data = await response.json();
      setUsers(data.results);
    };
    fetchUsers();
  }, [searchParams]);

  const handleSearchParamChange = (index, event) => {
    const newSearchParams = [...searchParams];
    newSearchParams[index].value = event.target.value;
    setSearchParams(newSearchParams);
  };
  const tableHeaders = [
    {title: 'User', size: 5},
    {title: 'Contact Info', size: 3},
    {title: 'Registration Date', size: 2},
    {title: 'Country/Post Code', size: 2},
  ];

  return (
    <div className={styles.container}>
      <div className={styles.searchHeader}>
        <div>All Users</div>
        <div>
          {searchParams.map((searchParam, index) => (
            <TextField
              key={index}
              label={searchParam.label}
              variant="outlined"
              margin="dense"
              value={searchParam.value}
              onChange={(event) => handleSearchParamChange(index, event)}
              style={{width: 197, marginLeft: index > 0 ? '14px' : '0'}}
            />
          ))}
        </div>
      </div>
      <div className={styles.tableHeader}>
        <Grid container>
          {tableHeaders.map((header) => (
            <Grid item xs={header.size}>
              <Typography style={{color: '#9FA2B4', fontSize: '14px'}}>
                {header.title}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
      <Divider
        style={{backgroundColor: '#DFE0EB', height: '1px', margin: '8px 0'}}
      />

      <Grid container spacing={3}>
        {users.map((user) => (
          <>
            <Grid item xs={12} className={styles.cardHover}>
              <UserCard user={user} />
            </Grid>
            <Divider
              style={{
                backgroundColor: '#DFE0EB',
                height: '1px',
                width: '100%',
              }}
            />
          </>
        ))}
      </Grid>
    </div>
  );
}

export default UsersList;
