import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import IdeaIcon from '@material-ui/icons/EmojiObjects';
import TicketIcon from '@material-ui/icons/ConfirmationNumber';
import logo from '../../logo-white-small 1.png';
import './sidebar.css';

const drawerWidth = 255;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#363740',
    color: '#A4A6B3',
  },
  toolbar: theme.mixins.toolbar,
  list: {
    '& > .MuiListItem-root': {
      minHeight: 48,
      '&:hover': {
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          height: '100%',
          width: 1,
          backgroundColor: '#A4A6B3',
        },
      },
    },
  },
}));

const items = [
  {text: 'Overview', icon: <DashboardIcon style={{color: '#9FA2B4'}} />},
  {text: 'Tickets', icon: <TicketIcon style={{color: '#828282'}} />},
  {text: 'Ideas', icon: <IdeaIcon style={{color: '#9FA2B4'}} />},
  {text: 'Users', icon: <PeopleIcon style={{color: '#828282'}} />},
];

export default function Sidebar() {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className="sideContainer">
        <img src={logo} alt="Logo" width={131} />
      </div>

      <List style={{marginTop: 73}} className={classes.list}>
        {items.map((item, index) => (
          <ListItem button key={index} style={{padding: 18, paddingLeft: 33}}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
