import {
    Box,
    Button,
    Heading,
    Stack,
    Text
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

import ExecHubLogo from '../assets/images/ExecHub Logo Branco_1.png';
import Segmentation from './dashboardHelpers/segregateSegmentations';


const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Dashboard = () => {
    return (
        <Box minH="100vh" p={6}>
            {/* Header */}
            <Box as="header" textAlign="center" mb={6} justifyContent={'center'} alignItems={'center'} display={'flex'} flexDirection={'column'}>
                <img src={ExecHubLogo} alt="Logo" style={{ maxWidth: '150px' }} />
            </Box>
            <Box
                h="lg"
                bgBlendMode="multiply"
                bgGradient="linear-gradient(150deg, hsl(15, 100.00%, 50.00%), #950095, #010e2d, #111111)"
                color="white"
                py={8}
                px={4}
                borderRadius="lg"
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
            {/* Mentoria */}
            <Box>
                <Segmentation></Segmentation>
            </Box>
            



            {/* Informativos*/}
            <Box>
                <Box
                    color="white"
                    py={8}
                    px={4}
                    borderRadius="lg"
                    shadow="lg"
                    mb={6}
                    borderWidth={1}
                    shadowColor={'gray.100'}
                >
                    <Box mb={6}>
                        <Heading as="h2" size="4xl" mb={2} color="#ff4000">Interface Moderna</Heading>
                        <Text fontSize="x-large">
                            Nossa interface moderna e intuitiva foi projetada para proporcionar uma experiência de usuário excepcional. Navegue pela plataforma com facilidade e encontre exatamente o que você precisa em poucos cliques.
                        </Text>
                    </Box>
                </Box>

                <Box
                    color="white"
                    py={8}
                    px={4}
                    borderRadius="lg"
                    shadow="lg"
                    mb={6}
                    borderWidth={1}
                    shadowColor={'gray.100'}
                >
                    <Box mb={6}>
                        <Heading as="h2" size="4xl" mb={2} color="#ff4000">Funcionalidades Inovadoras</Heading>
                        <Text fontSize="x-large">
                            Descubra as funcionalidades que tornam nossa plataforma única e eficiente. Nossa tecnologia avançada permite que você maximize seu potencial e alcance seus objetivos profissionais com facilidade.
                        </Text>
                    </Box>
                </Box>

                <Box
                    color="white"
                    py={8}
                    px={4}
                    borderRadius="lg"
                    shadow="lg"
                    mb={6}
                    borderWidth={1}
                    shadowColor={'gray.100'}
                >
                    <Box mb={6}>
                        <Heading as="h2" size="4xl" mb={2} color="#ff4000">Conectividade</Heading>
                        <Text fontSize="x-large">
                            Conecte-se com profissionais de diversas áreas e expanda sua rede de contatos. Nossa plataforma facilita a colaboração e o networking, ajudando você a construir relações valiosas.
                        </Text>
                    </Box>
                </Box>

                <Box
                    color="white"
                    py={8}
                    px={4}
                    borderRadius="lg"
                    shadow="lg"
                    mb={6}
                    borderWidth={1}
                    shadowColor={'gray.100'}
                >
                    <Box mb={6}>
                        <Heading as="h2" size="4xl" mb={2} color="#ff4000">Segurança</Heading>
                        <Text fontSize="x-large">
                            Garantimos a segurança dos seus dados com as mais recentes tecnologias.
                            <br></br><br></br>
                            Sua privacidade é nossa prioridade, e estamos comprometidos em proteger suas informações pessoais.
                        </Text>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    );
};

export default Dashboard;