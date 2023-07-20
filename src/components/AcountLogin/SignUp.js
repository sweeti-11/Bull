import * as React from 'react';
import '../../index.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignUp(response) {
  const theme = createTheme({
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            "&.Mui-checked": {
              color: "#059473", 
            },
          },
        },
      },
    },
  });
  
  const navigate = useNavigate();
  const handleOnChange = (event) => {
   
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();   
    navigate('/document-verification')
 

  };
  


  return (
    <>
      <Helmet>
        <title>Bulleye | Sign Up </title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 8
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#059473' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <ToastContainer />
            <Box component="form" noValidatealidate  sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                   sx={{
                    "& .MuiInputLabel-root.Mui-focused": {color: '#059473'},
                    "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                       borderColor: "#059473"
                          }
                           }
                      }}             
                    variant="outlined"
                    autoComplete="given-name"
                    name="firstName"
                    fullWidth
                    type="text"
                    id="firstName"
                    label="First Name"
                    autoFocus
                    inputProps={{ maxLength: 10 }}
                  />
                </Grid>
                
                <Grid item xs={12} sm={6}>
                  <TextField
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {color: '#059473'},
                    "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                       borderColor: "#059473"
                          }
                           }
                      }} 
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                   
                    type="text"
                    inputProps={{ maxLength: 10 }}
                  /> 
                           
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {color: '#059473'},
                    "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                       borderColor: "#059473"
                          }
                           }
                      }} 
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleOnChange}
                    type="text"
                  />
                
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {color: '#059473'},
                    "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                       borderColor: "#059473"
                          }
                           }
                      }} 
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    
                  />
                 
                </Grid>

                <Grid item xs={12}>
                  <TextField
                  sx={{
                    "& .MuiInputLabel-root.Mui-focused": {color: '#059473'},
                    "& .MuiOutlinedInput-root.Mui-focused": {
                    "& > fieldset": {
                       borderColor: "#059473"
                          }
                           }
                      }} 
                   // required
                    fullWidth
                    id="mobile"
                    label="Mobile Number"
                    name="mobile"
                    type="text"
                    autoComplete="mobile"
                  />
                  
                </Grid>
            <Grid item xs={12}>
            <Box sx={{ minWidth: 120}}>
             <FormControl fullWidth>
             <InputLabel id="country">Country </InputLabel>
         <Select
          labelId="country"
          typr="text"
          id="country" 
          name="country"
          label="Country"      
        
         >
           
        </Select>
       
      </FormControl>
    </Box>
    </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                className="my-button"
                onClick={handleSubmit}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor:"#ff5e14"}}
                value="button"

              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item className='bottom-text'>
                  <Link href="/document-verification" variant="body2" >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}