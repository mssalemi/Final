import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LeaugeList(props) {

  const classes = useStyles();

  return (
    <>
      <List component="nav" className={classes.root} aria-label="contacts">
          {
            props.leagues.map( (league) => {
              return (
                <Link to={`${league._id}`}>
                  <ListItem button>
                    <ListItemIcon>
                      <AccountBoxIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={league.name} />
                  </ListItem>
                </Link>
              )
            })
          }
      </List>
    </>
  );
}