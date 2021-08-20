import React, { useState, useEffect } from 'react';
import { Container, Avatar, Typography, Button, InputAdornment,
  Grid, Link, makeStyles, Card, CardContent } from '@material-ui/core';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import { withRouter, useHistory } from 'react-router-dom';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { CssBaseline } from '@material-ui/core';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import fire from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AccountCircle from '@material-ui/icons/AccountCircle';
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

const SignUpForm = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }

  const handlePassword = (event) => {
    setPassword(event.target.value);
  }

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  }


  const  handleSignUp = (e) => {
    e.preventDefault()
    fire.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(repsponse => {
        if(repsponse) {
          props.toggle();
          toast.success('User Registered Succesfully');
        }
      }).catch((error) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
              toast.error(error.message);
              break;
          case 'auth/invalid-email':
            toast.error(error.message);
            break;
          case 'auth/weak-password':
            toast.error(error.message);
            break;
          default:
            toast.error(error.message);
        }
      });
    
    history.push("/home");
  }


  useEffect(() => {
      ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if(value !== password) {
          return false;
        } else {
          return true;
        }
      });
      return () => {
        ValidatorForm.removeValidationRule('isPasswordMatch');
      }
  }, [password]);

  return (
    <Container component="main" maxWidth="xs">
      <Card className={classes.card}>
          <CardContent>
            <ToastContainer/>
            <CssBaseline/>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <AccountCircle />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <ValidatorForm
                onSubmit={handleSignUp}
                className={classes.form}
              >
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
                  fullWidth
                  label="Password"
                  onChange={handlePassword}
                  name="password"
                  type="password"
                  value={password}
                  validators={['required']}
                  errorMessages={['this field is required', 'password not valid']}
                  autoComplete='off'
                  InputProps={{ 
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
              />
              <TextValidator 
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  label="Confirm password"
                  onChange={handleConfirmPassword}
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  validators={['isPasswordMatch','required']}
                  errorMessages={['password mismatch','this field is required']}
                  autoComplete='off'
                  InputProps={{ 
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockRoundedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item>
                  <Link onClick={props.toggle}  className={classes.pointer} variant="body2">
                    { "Already have an account? Log In" } 
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


export default withRouter(SignUpForm);