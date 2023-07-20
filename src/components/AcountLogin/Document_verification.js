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

const theme = createTheme();

export default function Mobile_verification() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic

    // Show the OTP TextField and change the text
    // Navigate to email-verification page
    navigate('/');
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
                Document Verification
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
                    name="aadhar"
                    label="Upload Aadhar Card Back Side Photo"
                    type="file"
                    id="aadhar"
                    autoComplete="aadhar"
                  />
                        {/* <Button variant="contained" disableElevation sx={{mt:1}}>
                          Send OTP
                        </Button> */}
                  <TextField
                    sx={{
                      mt: 4,
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
                    name="aadhar"
                    label="Upload Aadhar Card Back Side Photo"
                    type="file"
                    id="aadhar"
                    autoComplete="aadhar"
                  />
                   <TextField
                    sx={{
                      mt: 4,
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
                    name="pan"
                    label="Upload Pan Card Photo"
                    type="file"
                    id="pan"
                    autoComplete="pan"
                  />
                <Button
                  className="my-button"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 9, bgcolor: "#ff5e14" }}
                  onClick={handleSubmit}
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
