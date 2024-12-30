import { Box } from '@chakra-ui/react';
import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <Box position={"absolute"} left={300} top={110} h={10} zIndex={1} w={"10/12"}>{children}</Box>;
};

export default Container;