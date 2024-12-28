import { Box, Button, Heading, SimpleGrid, Stack, Tabs } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import { FaBriefcase } from "react-icons/fa6";
import { IoBusinessOutline } from "react-icons/io5";
import { LuAArrowUp, LuUser } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import CardsContainer from "../containers/card";
import CardsHeadHunters from "../containers/cardHeadhunters";

const Segmentation = () => {
    return (
        <Box mt={10}>
            <Tabs.Root defaultValue="mentors">
                <Tabs.List>
                    <Tabs.Trigger value="mentors" fontSize={16}>
                        <LuUser size={24}/>
                        Mentores / C-LEVEL
                    </Tabs.Trigger>
                    <Tabs.Trigger value="projects" fontSize={16}>
                        <TbTargetArrow size={20} />
                        HeadHunters / Recrutadores
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tasks" fontSize={16}>
                        <FaBriefcase size={20} />
                        Profissionais
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="mentors" mb={30}>
                    <Heading as="h2" size="3xl" color="#ff4000" mt={4} mb={2}>
                        Mentores / C-LEVEL
                    </Heading>
                    <Heading mb={10}>Descubra uma nova maneira de fazer consultorias: simples, prática e eficiente com a ExecHub.</Heading>
                    <Typography fontSize={20} mb={10}>
                        Na Exechub, mentores encontram uma oportunidade única de compartilhar sua expertise e impactar carreiras em ascensão.
                    </Typography>

                    <SimpleGrid columns={2} gap="40px" mb={50}>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size="2xl" mb={2} display={'flex'} alignItems={'center'} alignContent={"center"} >
                                <LuUser size={50} style={{ marginRight: "10px" }} /> Salas de Aula Personalizadas
                            </Heading>
                            <Typography fontSize={16}>
                                Imagine um espaço onde mentores podem criar salas de aula personalizadas para mentorias, facilitando a troca de conhecimento e experiências de forma estruturada e interativa. Com a ExecHub, essa visão se torna realidade, proporcionando um ambiente ideal para o desenvolvimento profissional contínuo. <br></br> <br></br>
                                Receba por cada mentorado que participar de suas salas de aula e acompanhe o progresso de cada um deles em tempo real.
                            </Typography>
                        </Box>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size="2xl" mb={2} display={'flex'} alignItems={'center'} alignContent={"center"}>
                                <IoBusinessOutline size={50} style={{ marginRight: "10px" }} /> C-Level as a Service
                            </Heading>
                            <Typography fontSize={16}>
                                Imagine um espaço onde mentores podem criar salas de aula personalizadas para mentorias, facilitando a troca de conhecimento e experiências de forma estruturada e interativa. Com a ExecHub, essa visão se torna realidade, proporcionando um ambiente ideal para o desenvolvimento profissional contínuo.
                            </Typography>
                        </Box>
                    </SimpleGrid>

                    <Box mb={30}>
                        <Box
                            height="300px"
                            p={4}
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="md"
                            bgGradient="linear-gradient(150deg, hsl(15, 100.00%, 50.00%), #950095, #010e2d, #111111)"
                            bgSize="cover"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            color="white"
                        >
                            <Heading as="h3" size="4xl" mb={2}>
                                Transforme sua Carreira
                            </Heading>
                            <Typography fontSize={16} textAlign="center">
                                Junte-se a uma comunidade de mentores e profissionais que estão redefinindo o mercado de trabalho.
                            </Typography>
                        </Box>
                    </Box>
                    
                    <CardsContainer description="asdasdsa" title="Wellington Ramos Bezerra"></CardsContainer>
                </Tabs.Content>

                <Tabs.Content value="projects" mb={30}>
                    <Heading as="h2" size="3xl" color="#ff4000" mt={4} mb={2}>
                        HeadHunters / Recrutadores
                    </Heading>
                    <Heading mb={10}>Encontre os melhores talentos de forma rápida e eficiente com a ExecHub.</Heading>
                    <Typography fontSize={20} mb={10}>
                        Na Exechub, headhunters têm acesso a uma plataforma inovadora para identificar e recrutar os melhores profissionais do mercado.
                    </Typography>

                    <SimpleGrid columns={2} gap="40px" mb={50}>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size="2xl" mb={2} display={'flex'} alignItems={'center'} alignContent={"center"} >
                                <FaBriefcase size={50} style={{ marginRight: "10px" }} /> Ferramentas de Recrutamento Avançadas
                            </Heading>
                            <Typography fontSize={16}>
                                Utilize ferramentas de recrutamento avançadas para encontrar os candidatos ideais de forma rápida e eficiente. Com a ExecHub, você pode gerenciar todo o processo de recrutamento em um único lugar.
                            </Typography>
                        </Box>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size="2xl" mb={2} display={'flex'} alignItems={'center'} alignContent={"center"}>
                                <IoBusinessOutline size={50} style={{ marginRight: "10px" }} /> Rede de Talentos
                            </Heading>
                            <Typography fontSize={16}>
                                Construa uma rede de talentos diversificada e qualificada para atender às necessidades de seus clientes. A ExecHub facilita a conexão entre headhunters e profissionais de alto nível.
                            </Typography>
                        </Box>
                    </SimpleGrid>

                    <Box mb={30}>
                        <Box
                            height="300px"
                            p={4}
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="md"
                            bgGradient="linear-gradient(150deg, hsl(15, 100.00%, 50.00%), #950095, #010e2d, #111111)"
                            bgSize="cover"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            color="white"
                        >
                            <Heading as="h3" size="4xl" mb={2}>
                                Encontre os Melhores Talentos
                            </Heading>
                            <Typography fontSize={16} textAlign="center">
                                Junte-se a uma comunidade de headhunters que estão transformando o processo de recrutamento.
                            </Typography>
                        </Box>
                    </Box>
                    
                    <CardsHeadHunters description="asdasdsa" title="Wellington Ramos Bezerra"></CardsHeadHunters>

                    
                </Tabs.Content>

                <Tabs.Content value="tasks" mb={30}>
                    <Heading as="h2" size="3xl" color="#ff4000" mt={4} mb={2}>
                        Profissionais
                    </Heading>
                    <Heading mb={10}>Aprimore suas habilidades e avance na sua carreira com a ExecHub.</Heading>
                    <Typography fontSize={20} mb={10}>
                        Na Exechub, profissionais encontram uma plataforma completa para desenvolvimento de carreira e networking.
                    </Typography>

                    <SimpleGrid columns={2} gap="40px" mb={50}>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size="2xl" mb={2} display={'flex'} alignItems={'center'} alignContent={"center"} >
                                <LuAArrowUp size={50} style={{ marginRight: "10px" }} /> Desenvolvimento Profissional
                            </Heading>
                            <Typography fontSize={16}>
                                Acesse recursos e ferramentas para aprimorar suas habilidades e avançar na sua carreira. Com a ExecHub, você tem acesso a cursos, mentorias e muito mais.
                            </Typography>
                        </Box>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size="2xl" mb={2} display={'flex'} alignItems={'center'} alignContent={"center"}>
                                <IoBusinessOutline size={50} style={{ marginRight: "10px" }} /> Oportunidades de Networking
                            </Heading>
                            <Typography fontSize={16}>
                                Conecte-se com outros profissionais e expanda sua rede de contatos. A ExecHub oferece diversas oportunidades de networking para ajudar você a crescer na sua carreira.
                            </Typography>
                        </Box>
                    </SimpleGrid>

                    <Box mb={30}>
                        <Box
                            height="300px"
                            p={4}
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="md"
                            bgGradient="linear-gradient(150deg, hsl(15, 100.00%, 50.00%), #950095, #010e2d, #111111)"
                            bgSize="cover"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="center"
                            color="white"
                        >
                            <Heading as="h3" size="4xl" mb={2}>
                                Avance na Sua Carreira
                            </Heading>
                            <Typography fontSize={16} textAlign="center">
                                Junte-se a uma comunidade de profissionais que estão se destacando no mercado de trabalho.
                            </Typography>
                        </Box>
                    </Box>
                    
                    <CardsContainer description="asdasdsa" title="Wellington Ramos Bezerra"></CardsContainer>

                    <Stack direction="row" wordSpacing={4} justify="center" mt={4}>
                        <Heading as="h3" size="4xl" mb={2}>
                            Encontre os especialistas de todas as areas evolua sua carreira com a ExecHub.<br></br>
                            Evolua sua carreira com referenciais de mercado.
                        </Heading>
                        <Button colorScheme="orange" variant="outline" borderColor="white" color="white">Buscar Mentores</Button>
                    </Stack>
                    
                </Tabs.Content>
            </Tabs.Root>
        </Box>
    )
}

export default Segmentation;