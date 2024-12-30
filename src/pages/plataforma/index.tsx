import { StatLabel, StatRoot, StatValueText } from "@/components/ui/stat";
import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
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

    const data = [
        {
            name: 'Janeiro',
            conexões: 0,
            visualizações: 0,
        },
        {
            name: 'Fevereiro',
            conexões: 8,
            visualizações: 14,
        },
        {
            name: 'Março',
            conexões: 10,
            visualizações: 22,
        },
        {
            name: 'Abril',
            conexões: 20,
            visualizações: 30,
        },
        {
            name: 'Maio',
            conexões: 30,
            visualizações: 40,
        },
        {
            name: 'Junho',
            conexões: 40,
            visualizações: 50,
        },
        {
            name: 'Julho',
            conexões: 50,
            visualizações: 60,
        },
    ];

    return (
        <Box>
            <Menu />
            <Container>
                <SectionInformations />
                <BoxDefault>
                    <Heading as="h2" size="3xl" mb={2} color="#ff4000">Visão Geral</Heading>
                    <Text fontSize="larger">
                        Acompanhe o crescimento de conexões e visualizações do seu perfil. 🚀
                    </Text>
                    <Box zIndex={100} position={"relative"}>
                        <ResponsiveContainer width="100%" height={400}
                        >
                            <LineChart data={data} margin={{ top: 20, right: 30, bottom: 5 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="5" y1="5" x2="5" y2="1">
                                        <stop offset="5%" stopColor="#e6e6e6" stopOpacity={0.8} />
                                    </linearGradient>
                                    <linearGradient id="colorvisualizacoes" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#ff6a00" stopOpacity={0.8} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" tick={{ fill: '#e6e6e6' }} />
                                <YAxis tick={{ fill: '#e6e6e6' }} />
                                <Tooltip contentStyle={{ backgroundColor: '#010101', border: 'none' }} itemStyle={{ color: '#ffffff' }} />
                                <Legend wrapperStyle={{ color: 'red' }} />
                                <Line type="monotone" dataKey="conexões" stroke="#ff6a00" fillOpacity={1} fill="#ff6a00" activeDot={{ r: 8 }}/>
                                <Line type="monotone" dataKey="visualizações" stroke="#00c6ff" fillOpacity={1} fill="#00c6ff" activeDot={{ r: 8 }} />
                            </LineChart>
                        </ResponsiveContainer>
                       
                        <Box display="flex" justifyContent="space-around" mt={4}>
                            
                            <StatRoot bg={'#010101'} borderRadius={8} border={'1px solid #ff6a00'} p={2} m={4}>
                                <StatLabel>Conexões</StatLabel>
                                <Text style={{ fontWeight: 600, fontSize: 26}}>935.40</Text>
                            </StatRoot>
                            <StatRoot bg={'#010101'} borderRadius={8} border={'1px solid #ff6a00'} p={2} m={4}>
                                <StatLabel>Visualizações Perfil</StatLabel>
                                
                                <Text style={{ fontWeight: 600, fontSize: 26 }}>124</Text>
                            </StatRoot>
                            <StatRoot bg={'#010101'} borderRadius={8} border={'1px solid #ff6a00'} p={2} m={4}>
                                <StatLabel>Match de oportunidade</StatLabel>
                                <Text style={{ fontWeight: 600, fontSize: 26 }}>542</Text>
                            </StatRoot>
                            <StatRoot bg={'#010101'} borderRadius={8} border={'1px solid #ff6a00'} p={2} m={4}>
                                <StatLabel>Networks Gerados</StatLabel>
                                <Text style={{ fontWeight: 600, fontSize: 26 }}>531</Text>
                            </StatRoot>
                            </Box>
                        
                    </Box>
                    
                </BoxDefault>
                <BoxDefault>
                    <Heading as="h2" size="3xl" mb={2} color="#ff4000">Overview Mentorias</Heading>
                    <Heading as="h4" fontSize="larger">
                        Quer saber mais sobre aulas e novos conteúdos disponíveis. 😎
                    </Heading>

                    <Box display={"grid"} mt={20} mb={10} gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gridGap={4}>
                        <div>
                            <Text color={"#a1a1aa"}>Agendadas</Text>
                            <Text style={{ fontWeight: 600, fontSize: 26 }}>0</Text>
                        </div>
                        <div>
                            <Text color={"#a1a1aa"}>Participações / Interesse</Text>
                            <Text style={{ fontWeight: 600, fontSize: 26 }}>0</Text>
                        </div>
                        
                    </Box>

                    <div>
                        <Stack position="relative">
                           
                            <Box as="table" width="100%" mt={4} borderRadius="md" overflow="hidden" boxShadow="md" mb={5} bg="#121212" >
                                <Box as="thead" bg="#ff4000" color="white">
                                    <Box as="tr">
                                        <Box as="th" textAlign="left" p={4} borderBottom="1px solid #ff4000">Data</Box>
                                        <Box as="th" textAlign="left" p={4} borderBottom="1px solid #ff4000">Horário</Box>
                                        <Box as="th" textAlign="left" p={4} borderBottom="1px solid #ff4000">Assunto</Box>
                                        <Box as="th" textAlign="left" p={4} borderBottom="1px solid #ff4000">Mentor</Box>
                                    </Box>
                                </Box>
                                <Box as="tbody">
                                    <Box as="tr" _hover={{ bg: "#161616" }}>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">01/11/2023</Box>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">10:00</Box>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">Introdução ao React</Box>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">João Silva</Box>
                                    </Box>
                                    <Box as="tr" _hover={{ bg: "#161616" }}>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">02/11/2023</Box>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">14:00</Box>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">Avançando com TypeScript</Box>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">Maria Souza</Box>
                                    </Box>
                                    <Box as="tr" _hover={{ bg: "#161616" }}>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">03/11/2023</Box>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">16:00</Box>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">Testes Unitários</Box>
                                        <Box as="td" p={4} borderBottom="1px solid #ff4000">Carlos Lima</Box>
                                    </Box>
                                </Box>
                            </Box>

                            <Link variant="plain" rounded="full" p={1} border={"1px solid #fff"} w={200} textAlign={"center"} display={"flex"} justifyContent={"center"}> <b>Ir para mentorias!</b></Link>
                        </Stack>
                    </div>

                </BoxDefault>

                <Box>
                    <Heading as="h2" size="3xl" mb={2} color="#ff4000">Novas Oportunidades</Heading>
                    <Box display={"grid"} gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gridGap={4}>
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

                </Box>
            </Container>
        </Box>
    );
};

export default Plataforma;