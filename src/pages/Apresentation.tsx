import {
    Box,
    Button,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

import ExecHubLogo from '../assets/images/logo_branco.png';
import Segmentation from './dashboardHelpers/segregateSegmentations';
import Footer from './Footer';

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Apresentation = () => {
    return (
        <Box minH="100vh">

            {/* Header */}
            
                <Box as="header" textAlign="center" mb={6}>
                    <Box px={6} as="nav" display="flex" justifyContent="space-between" alignItems="center">
                        <img src={ExecHubLogo} alt="Logo" style={{ maxWidth: '100px' }} />
                        <Box display={{ base: 'none', md: 'block' }}>
                            <Stack direction="row" wordSpacing={4}>
                                <Button colorScheme="orange" variant="outline" borderColor="white" color="white">Login</Button>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            
            {/* Mentoria */}
            <Box p={6}>
                <Box
                    h="2xl"
                    bgBlendMode="multiply"
                    bgGradient="linear-gradient(150deg, hsl(15, 100.00%, 50.00%), #950095, #010e2d, #111111)"
                    color="white"
                    rounded="lg"
                    p={6}
                    shadow="lg"
                    mb={6}
                    borderWidth={1}
                    shadowColor={'gray.100'}
                    bgSize="200% 200%"
                    justifyContent={'center'}
                    alignItems={'center'}
                    display={'flex'}
                    flexDirection={'column'}
                    animation={`${gradient} 15s ease infinite`}
                >
                    <Heading as="h1" size="4xl" textAlign="center">Conectando Profissionais para o Sucesso</Heading>
                    <Text fontSize="lg" mt={2} textAlign="center">
                        Compartilhe sua experiência, transforme carreiras.              </Text>
                    <Stack direction="row" wordSpacing={4} justify="center" mt={4}>
                        <Button colorScheme="orange" variant="solid">Saiba Mais ❓</Button>
                        <Button colorScheme="orange" variant="outline" borderColor="white" color="white">Comece Agora 🚀</Button>
                    </Stack>
                </Box>
            </Box>
            
            {/* Mentoria */}
            <Box p={6}>
                <Segmentation></Segmentation>
            </Box>
        

            {/* Informativos*/}
            <Box backgroundColor="" p={6} borderRadius="lg" shadow="lg" mb={6} position={'relative'}>
                <Box
                    color="white"
                    py={8}
                    px={4}
                    shadow="lg"
                    mb={6}
                    borderWidth={1}
                >
                    <Box mb={6}>
                        <Heading as="h2" size="4xl" mb={2} color="#ff4000">Interface Moderna 💎</Heading>
                        <Text fontSize="larger">
                            Nossa interface moderna e intuitiva foi projetada para proporcionar uma experiência de usuário excepcional. Navegue pela plataforma com facilidade e encontre exatamente o que você precisa em poucos cliques.
                        </Text>
                    </Box>
                </Box>

                <Box
                    color="white"
                    py={8}
                    px={4}
                    shadow="lg"
                    mb={6}
                    borderWidth={1}
                >
                    <Box mb={6}>
                        <Heading as="h2" size="4xl" mb={2} color="#ff4000">Simples e Objetivo 💥</Heading>
                        <Text fontSize="larger">
                            A ExecHub foi projetada para ser simples e objetiva, proporcionando uma experiência de usuário intuitiva e eficiente. Encontre mentores, mentoreados e oportunidades de carreira em um só lugar.
                        </Text>
                    </Box>
                </Box>

                <Box
                    color="white"
                    py={8}
                    px={4}
                    shadow="lg"
                    mb={6}
                    borderWidth={1}
                >
                    <Box mb={6}>
                        <Heading as="h2" size="4xl" mb={2} color="#ff4000">Receba por Aula e por contratação 🤑</Heading>
                        <Text fontSize="larger">
                            Com a ExecHub, você pode receber por cada aula ministrada e por cada contratação realizada. Aumente sua renda e expanda sua rede de contatos com a ExecHub.
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Footer></Footer>
        </Box>
    );
};

export default Apresentation;