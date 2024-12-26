import { PersonOutlineOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Grid2, Link, Paper, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import NavBar from "../components/Navbar";

export function Register() {

    const handleSubmit = (): void => console.log('Register')

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
                        Sign up now
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
                            placeholder="Email"
                            fullWidth
                            required
                            type="email"
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

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            sx={{
                                mt: 1
                            }}
                        >
                            SIGN UP
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
                                to='/login'
                            >
                                Already have an account?
                            </Link>
                        </Grid2>
                    </Grid2>
                </Paper>
            </Container>
        </>
    )
}
