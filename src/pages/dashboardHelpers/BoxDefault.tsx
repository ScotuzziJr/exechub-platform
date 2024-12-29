import { Box } from '@chakra-ui/react';
import React from 'react';


interface BoxDefaultProps {
    children: React.ReactNode;
}

const BoxDefault: React.FC<BoxDefaultProps> = ({ children }) => {
    return (
        <Box
            height="1xl"
            color="white"
            borderRadius="lg"
            p={6}
            boxShadow="lg"
            mb={6}
            borderWidth={1}
            boxShadowColor={'gray.100'}
            display={'flex'}
            flexDirection={'column'}
        >
            {children}
        </Box>
    );
};

export default BoxDefault;