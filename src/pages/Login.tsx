import { PersonOutlineOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid2, Link, Paper, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import NavBar from "../components/Navbar";

export function Login() {

    const handleSubmit = (): void => console.log('Login')

    return (
        <>
            <NavBar />

            <Container 
                maxWidth="xs"
            >
                <Paper 
                    elevation={10}
                    sx={{ 
                        marginTop: 8, 
                        padding: 2 
                    }}    
                >
                    <Avatar 
                        sx={{ 
                            mx: 'auto',
                            textAlign: 'center',
                            mb: 1  
                        }}
                    >
                        <PersonOutlineOutlined />
                    </Avatar>

                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{
                            textAlign: 'center'
                        }}
                    >
                        Sign in
                    </Typography>

                    <Box
                        component='form'
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            mt: 1
                        }}
                    >
                        <TextField
                            placeholder="Username"
                            fullWidth
                            required
                            autoFocus
                            sx={{
                                mb: 2
                            }} 
                        />

                        <TextField
                            placeholder="Password"
                            fullWidth
                            required
                            type="password"
                            sx={{
                                mb: 2
                            }} 
                        />

                        <FormControlLabel 
                            control={
                                <Checkbox 
                                    value="remember"
                                    color="primary"
                                />
                            }
                            label="Remind me"
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                mt: 1
                            }}
                        >
                            SIGN IN
                        </Button>
                    </Box>

                    <Grid2
                        container
                        justifyContent='space-between'
                        sx={{
                            mt: 1
                        }}
                    >
                        <Grid2>
                            <Link 
                                component={RouterLink}
                                to='/'
                            >
                                Forgot password?
                            </Link>
                        </Grid2>

                        <Grid2>
                            <Link 
                                component={RouterLink}
                                to='/register'
                            >
                                Sign up now
                            </Link>
                        </Grid2>
                    </Grid2>
                </Paper>
            </Container>
        </>
    )
}
