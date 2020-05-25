import React, { useState, useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Copyright from '../../components/common/copyright/Copyright';

import { login } from "../../actions/userAction";
import { DeckCardContext } from "../../ApplicationStore";
import { Redirect } from 'react-router'

import loginUseStyles from './LoginUseStyles';


const Login = () => {
  const classes = loginUseStyles();

  const { userState, userDispatch } = useContext(DeckCardContext);

  const [emailInputData, setEmailInputData] = useState("");
  const handleEmailInputData = e => {
    setEmailInputData(e.target.value);
  };

  const [passwordInputData, setPasswordInputData] = useState("");
  const handlePasswordInputData = e => {
    setPasswordInputData(e.target.value);
  };

  const submitLoginInfo = (e) => {
    e.preventDefault();
    userDispatch(login(emailInputData, passwordInputData));
  }

  if (userState.authenticated === true) return <Redirect to='/' />;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          로그인
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="이메일"
            name="email"
            autoComplete="email"
            onChange={handleEmailInputData} // 주의
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="비밀번호"
            type="password"
            id="password"
            onChange={handlePasswordInputData} // 주의
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="비밀번호 저장"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={submitLoginInfo}
          > 로그인 </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                비밀번호 찾기
              </Link>
            </Grid>
            <Grid item>
              <Link href="http://localhost:3000/signup" variant="body2">
                {"가지고 계신 계정이 없으신가요? 회원가입"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}


export default Login;