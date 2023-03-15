import React, {useState} from 'react';
import {
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Drawer,
} from '@material-ui/core';
import SideBarInfo from '../../SideBarInfo/SideBarInfo';

const UserCard = ({user}) => {
  const {name, email, phone, picture, registered, location} = user;

  const registrationDate = new Date(registered.date).toLocaleDateString();

  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const sideInfo = {
    isSmall: isSmallerScreen,
    userName: name,
    location: location,
    userPicture: picture,
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{margin: '24px 0'}}
        onClick={handleDrawerOpen}
      >
        <Grid item xs={4} sm={5} md={5}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <img
                src={picture.large}
                alt={`${name.first} ${name.last}`}
                style={{
                  width: isSmallerScreen ? '32px' : '44px',
                  height: isSmallerScreen ? '32px' : '44px',
                  borderRadius: '50%',
                  marginRight: isSmallerScreen ? '16px' : '24px',
                  marginLeft: isSmallerScreen ? '0' : '32px',
                }}
              />
            </Grid>

            <Grid item>
              <Grid container direction="column" spacing={1}>
                <Grid item>
                  <Typography>
                    {name.first} {name.last}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    style={{
                      color: '#C5C7CD',
                      fontSize: isSmallerScreen ? '10px' : '12px',
                    }}
                  >
                    {location.city}, {location.state}, {location.country}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={3} sm={3} md={3}>
          <Grid container direction={'column'}>
            <Typography>{email}</Typography>
            <Typography
              style={{
                color: '#C5C7CD',
                fontSize: isSmallerScreen ? '10px' : '12px',
              }}
            >
              {phone}
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={2} sm={2} md={2}>
          <Grid container direction={'column'}>
            <Typography>{registrationDate}</Typography>
            <Typography
              style={{
                color: '#C5C7CD',
                fontSize: isSmallerScreen ? '10px' : '12px',
              }}
            >
              Registration Date
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={2} sm={2} md={2}>
          <Grid container direction={'column'}>
            <Typography>{location.country}</Typography>
            <Typography
              style={{
                color: '#C5C7CD',
                fontSize: isSmallerScreen ? '10px' : '12px',
              }}
            >
              {location.postcode}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <SideBarInfo props={sideInfo} />
      </Drawer>
    </>
  );
};

export default UserCard;