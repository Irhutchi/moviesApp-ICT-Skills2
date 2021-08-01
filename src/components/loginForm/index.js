import React, { useState } from 'react';
import { Container, Avatar, Typography, Button, InputAdornment,
         Grid, Link, makeStyles, Card, CardContent, CssBaseline } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel } from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockOutlined from '@material-ui/icons/LockOutlined';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { ScaleLoader } from 'react-spinners';
import { useHistory, withRouter } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import { ToastContainer, toast } from 'react-toastify';
import fire from '../../firebase';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: '#fff'
  },
  card: {
    marginTop: '60px',
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingBottom: '20px',
  },
  pointer: {
    cursor: 'pointer',
    color: 'red'
  }
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberme, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  const override = `
    display: block;
    margin-left: 100px;
    border-color: red;
  `;
  
  
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleCheck = (event) => {
    setRememberMe(event.target.checked);
  }

  const handleLogin = (e) => {
      e.preventDefault();
      setLoading(true);
      fire.auth()
        .signInWithEmailAndPassword(email, password)
        .then(repsponse => {
          const {user} = repsponse;
          const data = {
            userId: user.uid,
            email: user.email
          }
          console.log(data);
          localStorage.setItem('User', JSON.stringify(data));
          const storage = localStorage.getItem('user');
          const loggedInUser = storage !== null ? JSON.parse(storage) : null;
          props.loggedIn(loggedInUser);
          setLoading(false);
        }).catch(error => {
          toast.error(error.message);
          setLoading(false);
        })
      history.push("/home");
  };



  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.card}>
        <CardContent>
          <ToastContainer/>
          <CssBaseline/>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <AccountCircle/>
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <ValidatorForm 
              onSubmit={handleLogin}
              onError={errors => {
                for (const err of errors) {
                  console.log(err.props.errorMessage[0])
                }
                }}
                className={classes.form}>
            <TextValidator 
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              onChange={handleEmail}
              name="email"
              value={email}
              validators={['required', 'isEmail']}
              errorMessages={['this field is required', 'email is not valid']}
              autoComplete='off'
              InputProps={{ 
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon />
                  </InputAdornment>
                ),
              }}
            />
             <TextValidator 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="password"
              type="password"
              onChange={handlePassword}
              name="password"
              value={password}
              validators={['required']}
              errorMessages={['this field is required']}
              autoComplete="off"
              InputProps={{ 
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox value={rememberme} 
              onChange={(e) => handleCheck(e)}
              color="primary" />}
              label="RememberMe"
            />
            {loading ? (
              <ScaleLoader
                css={override}
                size={150}
                color={'#db2d21'}
                loading={loading}/>
            ) : (
               <Button
               type="submit"
               fullWidth
               variant="contained"
               color="primary"
               className={classes.submit}
             >
               Log In
             </Button>
            )}
             <Grid container>
                <Grid item>
                  <Link onClick={props.toggle} className={classes.pointer} variant="body2">
                    { "Interested in Joining? Sign Up" } 
                  </Link>
                </Grid>
              </Grid>
            </ValidatorForm>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}

export default withRouter(LoginForm);