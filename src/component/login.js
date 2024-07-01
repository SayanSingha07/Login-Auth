import { Container, Grid, Paper, TextField,Button, InputAdornment, IconButton } from '@mui/material'
import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
    const [showPassword, setShowPasswor] = useState("false");
    const handleClickShowPassword = () => setShowPasswor(!showPassword);
  const [passwordvalue, setpasswordvalue] = useState(" ");
  const [emailvalue, setemailvalue] = useState(" ");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  console.log(emailvalue);
  console.log(passwordvalue);

  let [users,setusers]=useState( [{
    email: "abc@gmail.com",
    password: "123456"
  },
    {
      email: "abc@gmail.com",
      password: "123456"

    },
    {
      email: "abc@gmail.com",
      password: "123456"
    }
  ])

    let Visibility;
    let valueVisible;
    if (showPassword == false) {
        Visibility = <VisibilityOffIcon />
        valueVisible = "password";
    }
    else {
        Visibility = <VisibilityIcon />
        valueVisible = "text";
  }
  
  const handleLogin = () => {
    const user = users.find(user => user.email === emailvalue && user.password === passwordvalue);
    if (user) {
      alert('Login successful!');
      // Implement login logic here, such as redirecting to another page
    } else {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    else {
      alert('Login  not successful!');
      setOpenSnackbar(false);
    }
  };
  
   

    
 
    return (
        <>
          <div>
            <Container maxWidth="sm">
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
              >
                <Paper elevation={2} sx={{ padding: 5 }}>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                      type="email"
                      onChange={e => {
                        setemailvalue(e.target.value);
                      }}
                        fullWidth
                        label="Enter your registered email"
                        placeholder="Email Address"
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type={valueVisible}
                        
                                        onChange={e => {
                                          setpasswordvalue(e.target.value);
                     }}
                                
                        fullWidth
                        label="Enter your Password"
                        placeholder="Password"
                        variant="outlined"
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={handleClickShowPassword}>
                              {Visibility}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <Button fullWidth variant="contained" onClick={handleLogin}>
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Container>
          </div>
        </>
      );
    }

export default Login