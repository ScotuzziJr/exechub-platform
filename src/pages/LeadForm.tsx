import { PersonOutlineOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Container, Paper, TextField, Typography, Select, MenuItem, FormControl, InputLabel, SelectChangeEvent, Grid2 } from "@mui/material";
import NavBar from "../components/Navbar";
import { useState } from "react";

const LeadForm = () => {
    const [role, setRole] = useState<string>("");

    // Update the type of the event parameter to SelectChangeEvent<string>
    const handleRoleChange = (event: SelectChangeEvent<string>) => {
        setRole(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Register with role:', role);
    };

    return (
        <>
            <NavBar />

            <Container
                maxWidth="xs"
                sx={{
                    marginTop: 5,
                    textAlign: "center"
                }}
            >
                <Typography>
                    We're glad with your interest to join ExecHub! Fill the contact form below and soon
                    we'll contact you to provide updates about your subscription. 
                </Typography>
            </Container>

            <Container 
                maxWidth="xs"
            >
                <Paper 
                    elevation={10}
                    sx={{ 
                        marginTop: 5, 
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
                        Contact form
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
                            placeholder="Name"
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

                        {/* Role Combo Box */}
                        <FormControl fullWidth required sx={{ mb: 2 }}>
                            <InputLabel>Role</InputLabel>
                            <Select
                                value={role}
                                onChange={handleRoleChange}
                                label="Role"
                            >
                                <MenuItem value="developer">Developer looking for a job</MenuItem>
                                <MenuItem value="company">Company looking for hiring</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            placeholder="What do you expect by using ExecHub?"
                            fullWidth
                            required
                            type="text"
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
                            Register
                        </Button>
                    </Box>

                    <Grid2
                        container
                        justifyContent='space-between'
                        sx={{
                            mt: 1
                        }}
                    >
                    </Grid2>
                </Paper>
            </Container>
        </>
    );
};

export default LeadForm;
