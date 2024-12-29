import { StatLabel, StatRoot, StatValueText } from "@/components/ui/stat";
import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { gradient } from '../Apresentation';
import BoxDefault from '../dashboardHelpers/BoxDefault';
import { orangeDefault } from '../tokensColors/tokens';
import Container from './Container';
import Menu from './Menu';

const SectionInformations: React.FC = () => {
    return (<Box
        h="200px"
        color="white"
        rounded="lg"
        p={6}
        mb={6}
        animation={`${gradient} 15s ease infinite`}
        bgGradient="linear-gradient(154deg, hsl(0deg 0% 0%),rgb(11, 10, 10),rgb(75, 26, 2),rgb(0, 0, 0));"
    >
        <Heading as="h1" size="4xl">Bem vindo(a) de volta</Heading>
        <Text fontSize="lg" mt={2}>
            Consulte nossa documentação ou explore todas as funcionalidades e consquiste novos networks! 🤩</Text>

        <Box background="#000">

        </Box>
        <Box
            as="svg"
            position="absolute"
            top="50%"
            left="70%"
            width="100px"
            height="100px"
            rotate="50deg"
        >
            <polygon
                points="50,0 100,100 0,100"
                fill={orangeDefault}
            />
        </Box>
        <Box
            as="svg"
            position="absolute"
            top="54%"
            left="72%"
            width="100px"
            height="100px"
            rotate="50deg"
        >
            <polygon
                points="50,0 100,100 0,100"
                fill="#f4f4f4"
            />
        </Box>

    </Box>)
}

const Plataforma: React.FC = () => {
    return (
        <Box>
            <Menu />
            <Container>
                <SectionInformations />
                <BoxDefault>
                    <Heading as="h2" size="3xl" mb={2} color="#ff4000">Visão Geral</Heading>
                    <Box>
                        <StatRoot>
                            <StatLabel>Conexões</StatLabel>
                            <StatValueText
                                value={935.4}
                                formatOptions={{ style: "currency", currency: "USD" }}
                            />
                        </StatRoot>
                        <StatRoot>
                            <StatLabel>Visualizações Perfil</StatLabel>
                            <StatValueText
                                value={935.4}
                                formatOptions={{ style: "currency", currency: "USD" }}
                            />
                        </StatRoot>
                        <StatRoot>
                            <StatLabel>Match de oportunidade</StatLabel>
                            <StatValueText
                                value={935.4}
                                formatOptions={{ style: "currency", currency: "USD" }}
                            />
                        </StatRoot>
                        <StatRoot>
                            <StatLabel>Networks Gerados</StatLabel>
                            <StatValueText
                                value={935.4}
                                formatOptions={{ style: "currency", currency: "USD" }}
                            />
                        </StatRoot>
                    </Box>
                    
                </BoxDefault>
                <BoxDefault>
                    <Heading as="h2" size="3xl" mb={2} color="#ff4000">Overview Aulas</Heading>
                    <Box>
                        <StatRoot>
                            <StatLabel>Horas</StatLabel>
                            <StatValueText
                                value={935.4}
                                formatOptions={{ style: "currency", currency: "USD" }}
                            />
                        </StatRoot>
                        <StatRoot>
                            <StatLabel>Tópicos</StatLabel>
                            <StatValueText
                                value={935.4}
                                formatOptions={{ style: "currency", currency: "USD" }}
                            />
                        </StatRoot>
                        <StatRoot>
                            <StatLabel></StatLabel>
                            <StatValueText
                                value={935.4}
                                formatOptions={{ style: "currency", currency: "USD" }}
                            />
                        </StatRoot>
                    </Box>

                </BoxDefault>

                <BoxDefault>
                    <Heading as="h2" size="3xl" mb={2} color="#ff4000">Novas Oportunidades</Heading>
                    <Box>
                        <StatRoot>
                            <StatLabel>Novos perfis</StatLabel>
                            <StatValueText
                                value={935.4}
                                formatOptions={{ style: "currency", currency: "USD" }}
                            />
                        </StatRoot>
                        <StatRoot>
                            <StatLabel>Vagas</StatLabel>
                            <StatValueText
                                value={935.4}
                                formatOptions={{ style: "currency", currency: "USD" }}
                            />
                        </StatRoot>
                        <StatRoot>
                            <StatLabel>Mentorias liberadas</StatLabel>
                            <StatValueText
                                value={935.4}
                                formatOptions={{ style: "currency", currency: "USD" }}
                            />
                        </StatRoot>
                    </Box>

                </BoxDefault>
            </Container>
        </Box>
    );
};

export default Plataforma;