import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Box, Button, Heading, Input } from '@chakra-ui/react';
import { useState } from 'react';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle sign-in logic here
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <Box width="300px" margin="auto" padding="4" boxShadow="md" borderRadius="md">
            <Heading as="h2" size="lg" textAlign="center" marginBottom="4">Sign In</Heading>
            <form onSubmit={handleSubmit}>
                <FormControl id="email" marginBottom="4">
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </FormControl>
                <FormControl id="password" marginBottom="4">
                    <FormLabel>Password</FormLabel>
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </FormControl>
                <Button type="submit" colorScheme="teal" width="full">Sign In</Button>
            </form>
        </Box>
    );
};

export default SignIn;