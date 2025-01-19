import {
    Badge,
    Box,
    Button,
    Heading,
    Link,
    Stack,
    Text
} from '@chakra-ui/react';
import { keyframes } from '@emotion/react';

import { useNavigate } from 'react-router-dom';
import ExecHubLogo from '../assets/images/logo_branco.png';
import Segmentation from './dashboardHelpers/segregateSegmentations';
import Footer from './Footer';

export const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Apresentation = () => {


    const navigation = useNavigate();
    
    return (
        <Box minH="100vh">
            <Box p={{ sm: 0, md: 5, lg:30}}>
                {/* Header */}
                
                    <Box as="header" textAlign="center" mb={6}>
                    <Box px={6} as="nav" display="flex" justifyContent="space-between" alignItems="center">
                            <img src={ExecHubLogo} alt="Logo" style={{ maxWidth: '200px' }} />
                            <Box display={{ base: 'block', md: 'block' }}>
                            <Stack direction="row" wordSpacing={4}>
                                    
                                    <Button colorScheme="orange" variant="outline" borderColor="white" color="white">Login</Button>
                            </Stack>
                            <Badge colorPalette="green">em breve</Badge>
                            </Box>
                        </Box>
                    </Box>
                
                {/* Mentoria */}
                <Box p={6}>
                    <Box
                        h="2xl"
                        bgBlendMode="multiply"
                        bgGradient="linear-gradient(150deg, #ff4000,#000000,#000000, #ff4000, #050100)"
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
                        <Heading as="h1" size="4xl" textAlign="center">Conectando profissionais para o sucesso.</Heading>
                        <Text fontSize="lg" mt={2} textAlign="center">
                            Compartilhe sua experiência, transforme carreiras.              </Text>
                        <Stack direction="row" wordSpacing={4} justify="center" mt={4}>
                            <Link href='#informativos' >
                                <Button colorScheme="orange" variant="solid">Informações</Button>
                            </Link>

                            <Button as="a" onClick={() => navigation("/earlyadopers")} colorScheme="orange" variant="outline" borderColor="white" color="white">Junte-se agora 🚀</Button>
                            
    
                        </Stack>
                    </Box>
                </Box>
                
                {/* Mentoria */}
                <Box p={6}>
                    <Segmentation></Segmentation>
                </Box>
            

                {/* Informativos*/}
                <Box id="informativos" backgroundColor="" p={{ base:10, xl:40}} borderRadius="lg" shadow="lg" mb={6} position={'relative'}>
                    <Box
                        color="white"
                        py={8}
                        px={4}
                        shadow="lg"
                        mb={6}
                        borderWidth={1}
                    >
                        <Box mb={6}>
                            <Heading as="h2" size="4xl" mb={2} color="#ff4000">Executivo por demanda💎</Heading>
                            <Text fontSize="larger" mb={10} fontStyle="italic">Headhunters</Text>
                            <Text fontSize="larger">
                                O mercado exige flexibilidade e expertise em alto nível. Conectamos C-levels, especialistas e consultores a empresas que precisam de líderes estratégicos para superar desafios e alcançar resultados extraordinários.
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
                            <Heading as="h2" size="4xl" mb={2} color="#ff4000">Profissinais com alta performance! 💥</Heading>
                            <Text fontSize="larger" mb={10} fontStyle="italic">Headhunters</Text>
                            <Text fontSize="larger">
                                Conectamos sua empresa aos profissionais de alta performance e ampla experiência necessários para atender às suas demandas mais desafiadoras.
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
                            <Text fontSize="larger" mb={10}  fontStyle="italic">Executivos / Mentores</Text>
                            <Text fontSize="larger">
                                Você ganha por cada aula ministrada e por cada contratação realizada. Amplie sua renda enquanto expande sua rede de contatos e oportunidades.
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
                            <Heading as="h2" size="4xl" mb={2} color="#ff4000">Tenha um ambiente de alto nível 🧠</Heading>
                            <Text fontSize="larger" mb={10} fontStyle="italic">Profissionais</Text>
                            <Text fontSize="larger">
                                Tenha acesso a um ambiente exclusivo, repleto de profissionais qualificados e experientes. Amplie sua rede de contatos e faça parte dessa comunidade de alto nível.
                            </Text>
                        </Box>
                    </Box>
                </Box>
                
            </Box>
            <Footer></Footer>
        </Box>
    );
};

export default Apresentation;