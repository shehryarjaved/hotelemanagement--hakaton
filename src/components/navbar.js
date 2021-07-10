import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory,Link } from 'react-router-dom';
// import { useState,useEffect } from 'react';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function Navbar() {

  const history = useHistory();
  const gotoSingup = () => {

    history.push('/Signup')
  }
  const { id } = useParams()
  const user = useSelector(state => state.user)
  const dispatch = useDispatch();


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <img src="http://www.munish.nl/img/pages/hotels/special/icon_nh.png" width="70px" />
            Hotel Management System
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Room</Button>
          <Button color="inherit">Events</Button>
          <Button color="inherit">Contact-Us</Button>
          <Button color="inherit">About-Us</Button>
          <Link to="/Login"><Button color="inherit">Login</Button></Link>
          <Link to="/Signup"><Button color="inherit">SignUp</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
