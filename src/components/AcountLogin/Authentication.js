import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../AcountLogin/login.css';
import { Helmet } from 'react-helmet';
import {useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from 'react';
import {AuthenticationUrl} from '../../Constants/UrlConstants';
import { toast } from 'react-toastify';


import 'react-toastify/dist/ReactToastify.css';


const theme = createTheme();

export default function Authentication() {
  const [error, setError] = useState("")
  const UserId = localStorage.getItem('Id');
  const qr_code = localStorage.getItem('qrcode');
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    otp_two_fa: '',
    id: '',
  });
  const handleOnChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
   

  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
      formData.append('otp_two_fa', inputs.otp_two_fa);
      formData.append('id', (JSON.stringify(UserId)));
      console.log(inputs);
      console.log(formData);
    axios.post(AuthenticationUrl, formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
        'Content-type': 'application/json,'
      },
    }
    ).then(async (response) => {
      console.log(response)   
      // localStorage.setItem('forget_token', response.data.token);
      navigate('/sign-in');
      
    })
      .catch((error) => {
      console.log(error);
      setError(error.response.data.errors)
      
    });
    

  };  

 
 
  return (
    <>
       <Helmet>
        <title>Bulleye | Authentication </title>
      </Helmet>
    
    <ThemeProvider theme={theme}>
    <section id='bgcolor'>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
       
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ mb: 4,}}>
          Two-Factor Authentication<br/>
          </Typography>
          {localStorage.getItem('qrcode') && (
            <div>
            <div dangerouslySetInnerHTML={{ __html: qr_code }} />
            </div>
         )}
        
           <Box component="form" onSubmit={handleSubmit} Validate sx={{ mt: 4, textAlign: "center" }}>
          <label>Google Authenticator 2FA token</label>
            <TextField
              margin="normal" 
              // required
              fullWidth
              id="otp_two_fa"
              label="6 digit"
              name="otp_two_fa"
              autoComplete="otp_two_fa"
              type="text"
              onChange={handleOnChange}
              value={inputs.otp_two_fa}
            
            />
             {error && (
                    <p className="error" style={{color:"red", marginLeft:"-173px"}}> {error.otp_two_fa} </p>
)}
        <input name="id"  type="hidden"
           onChange={handleOnChange}
           value= {UserId}
           id="id"

           

           />
         
           <Button 
              type="submit"   
              variant="contained"
              sx={{ mt: 3, mb: 2, mr:3, pl:6, pr:6, ml:5 }}
    
            >
              Cancle
            </Button>
      
            <Button 
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, ml: 0, mr:5  }}
            >
              Authenticate
            </Button>
            <Grid container>
              <Grid item xs sx={{mb: 12}}>
                <Link href="forgot-password" variant="body2" 
>
                Don't have access to Google Authenticator?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </section>
    </ThemeProvider>
    </>
    
  );
}





