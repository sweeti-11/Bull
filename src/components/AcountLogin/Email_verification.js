import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
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
import { MuiOtpInput } from 'mui-one-time-password-input'


const theme = createTheme();

export default function Mobile_verification() {
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [otp, setOtp] = React.useState('')
  const [otpSent, setOtpSent] = React.useState(false);
  const handleChangeMobile = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

  const navigate = useNavigate();

  const handleSendOtp = () => {
    // Logic to send OTP
    setOtpSent(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic

    // Show the OTP TextField and change the text
    // Navigate to email-verification page
    navigate('/sign-up');
  };

  return (
    <>
      <Helmet>
        <title>Bulleye | Sign In</title>
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
              <Avatar sx={{ m: 1, bgcolor: '#059473' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Email Verification
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField
                    sx={{
                      mt: 5,
                      "& .MuiInputLabel-root.Mui-focused": { color: '#059473' },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#059473"
                        }
                      }
                    }}
                    variant='outlined'
                    margin="normal"
                    fullWidth
                    name="email"
                    label="Enter Email"
                    type="mobile"
                    id="email"
                    autoComplete="email"
                    disabled={otpSent} // Disable the field if OTP is sent
                  value={mobileNumber}
                  onChange={handleChangeMobile}
                  />
                        <Button variant="contained" disableElevation sx={{mt:1, mb:5}}   onClick={handleSendOtp}
                  disabled={otpSent} >
                          Send OTP
                        </Button>
                        {otpSent && (
                  <>
                        <Typography component="h1" variant="h6">
                Enter OTP
              </Typography>
                        <MuiOtpInput length={6} mt={2} value={otp} 
                         sx={{                    
                      "& .MuiInputLabel-root.Mui-focused": { color: '#059473' },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#059473"
                        }
                      }
                    }}onChange={handleChange} />
                                      </>
                )}
                  {/* <TextField
                    sx={{
                      mt:5,
                      "& .MuiInputLabel-root.Mui-focused": { color: '#059473' },
                      "& .MuiOutlinedInput-root.Mui-focused": {
                        "& > fieldset": {
                          borderColor: "#059473"
                        }
                      }
                    }}
                    variant='outlined'
                    margin="normal"
                    fullWidth
                    name="otp"
                    label="Enter OTP here..."
                    type="otp"
                    id="otp"
                    autoComplete="mobile"
                  /> */}
                <Button
                  className="my-button"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 9, bgcolor: "#ff5e14" }}
                  onClick={handleSubmit}
                  disabled={!otpSent}
                >
                  Submit
                </Button>
                <Grid container>
                </Grid>
              </Box>
            </Box>
          </Container>
        </section>
      </ThemeProvider>
    </>
  )
}
