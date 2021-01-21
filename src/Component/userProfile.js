import React from 'react';
import  '../App.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));
function UserProfile(props) {
    const classes = useStyles();
    return (
        <div  className="userlistsection">
            <img src={props.userdata[3]} alt="Girl in a jacket" width="200" height="200"></img>
        <div>
          
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="First Name" value={props.userdata[0]} />
            <TextField id="standard-basic" label="Last Name" value={props.userdata[1]} />
            <TextField id="standard-basic" label="Email" value={props.userdata[2]} />
        </form>
          
      </div>
      </div>
    );
 
}

export default UserProfile;
