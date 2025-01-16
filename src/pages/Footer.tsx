import { Badge, Box, Button, Flex, Heading, Link, Text } from '@chakra-ui/react';


import { FaLinkedin, FaTwitter } from 'react-icons/fa';

import { FaDiscord } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <Box as="footer" bg="gray.900" color="white" py={20}>
            <Flex justify={{ base: "center", md: "space-between" }} flexDirection={{ base: "center", sm: "column", md: "row" }} p={10}>
                <Box className="footer-section" mb={5} mt={10}>
                    <Heading as="h4" size="md" mb={2} borderBottom="2px" borderColor="teal.500" pb={1} color='#ff4000'>Produtos</Heading>
                    <Text mt={2}>Exechub - Mentors.</Text>
                    <Text mt={2}>Exechub - HeadHiring.</Text>
                    <Text mt={2}>Exechub - HubersTalents.</Text>
                </Box>
                <Box className="footer-section" mb={5} mt={10}>
                    <Heading as="h4" size="md" mb={2} borderBottom="2px" borderColor="teal.500" pb={1} color='#ff4000'>Comunidade</Heading>
                
                    <Text mt={2}><FaDiscord size={25} color='#ff4000' /> Comunidade Discord <Badge colorPalette="green">em breve</Badge></Text>
                </Box>
                <Box className="footer-section" mb={5} mt={10}>
                    <Heading as="h4" size="md" mb={2} borderBottom="2px" borderColor="teal.500" pb={1} color='#ff4000'>Contato</Heading>
                    <Text mt={2}>Email: exechubbr@hotmail.com</Text>
                    <Text mt={2}>Fone (1): +55 11 99001-3439</Text>
                    <Text mt={2}>Fone (2): +55 19 99278-2050</Text>
                </Box>
                <Box className="footer-section" mb={5} mt={10}>
                    <Heading as="h4" size="md" mb={2} color='#ff4000'>Curtiu ?</Heading>
                    <Button colorScheme="teal" variant="outline" mr={3}>Investidor anjo 👼</Button>
                    <Button colorScheme="teal" variant="outline">Quero ser parceiro! 🤝</Button>
                </Box>
            </Flex>

            <Flex justify="center" mt={10}>
                <Box className="footer-social" textAlign="center">
                    <Heading as="h4" size="md" mb={2} color='#ff4000'>Siga-nos nas redes</Heading>
                    <Link href="https://x.com/ExechubBr" mr={4}>
                        <FaTwitter /> X
                    </Link>
                    <Link href="https://www.linkedin.com/company/exechub/">
                        <FaLinkedin /> LinkedIn
                    </Link>
                </Box>
            </Flex>
            <Flex justify="center" mt={5}>
                <Box className="footer-cnpj" textAlign="center" color='#ff4000'>
                    <Text>CNPJ: 00.000.000/0000-00</Text>
                </Box>
            </Flex>
        </Box>
    );
};

export default Footer;