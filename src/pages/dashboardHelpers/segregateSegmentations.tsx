import { Box, Heading, SimpleGrid, Stack, Tabs } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import { FaBriefcase } from "react-icons/fa6";
import { IoBusinessOutline } from "react-icons/io5";
import { LuUser, LuUserCheck } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";
import CardsContainer from "../containers/card";
import CardsHeadHunters from "../containers/cardHeadhunters";

const Segmentation = () => {
    return (
        <Box mt={10}>
            <Tabs.Root defaultValue="mentors">
                <Tabs.List>
                    <Tabs.Trigger value="mentors" fontSize={{ base: 12, sm: 13, md: 15, lg: 17 }}>
                        <LuUser size={20} />
                        Executivos
                    </Tabs.Trigger>
                    <Tabs.Trigger value="projects" fontSize={{ base: 12, md: 16 }}>
                        <TbTargetArrow size={20} />
                        HeadHunters 
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tasks" fontSize={{ base: 12, md: 16 }}>
                        <FaBriefcase size={20} />
                        Profissionais
                    </Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="mentors" mb={30}>
                    <Heading as="h2" size={{ base: "xl", md: "3xl" }} color="#ff4000" mt={4} mb={2}>
                        Mentores / C-LEVEL
                    </Heading>
                    <Heading mb={10} fontSize={{ base: "lg", md: "2xl" }}>Descubra uma nova maneira de fazer consultorias: simples, prática e eficiente com a ExecHub.</Heading>
                    <Typography fontSize={{ base: 16, md: 20 }} mb={10}>
                        Na Exechub, mentores encontram uma oportunidade única de compartilhar sua expertise e impactar carreiras em ascensão.
                    </Typography>

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap="40px" mb={50}>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size={{ base: "xl", md: "2xl" }} mb={2} display={'flex'} alignItems={'center'} alignContent={"center"} >
                                <LuUser size={40} style={{ marginRight: "10px" }} /> Salas de Aula Personalizadas
                            </Heading>
                            <Typography fontSize={{ base: 14, md: 16 }}>
                                Imagine um espaço onde mentores podem criar salas de aula personalizadas para mentorias, facilitando a troca de conhecimento e experiências de forma estruturada e interativa. Com a ExecHub, essa visão se torna realidade, proporcionando um ambiente ideal para o desenvolvimento profissional contínuo. <br></br> <br></br>
                                Receba por cada mentorado que participar de suas salas de aula e acompanhe o progresso de cada um deles em tempo real.
                            </Typography>
                        </Box>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size={{ base: "xl", md: "2xl" }} mb={2} display={'flex'} alignItems={'center'} alignContent={"center"}>
                                <IoBusinessOutline size={40} style={{ marginRight: "10px" }} /> C-Level as a Service
                            </Heading>
                            <Typography fontSize={{ base: 14, md: 16 }}>
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
                            <Heading as="h3" size={{ base: "2xl", md: "4xl" }} mb={2}>
                                Transforme sua Carreira
                            </Heading>
                            <Typography fontSize={{ base: 14, md: 16 }} textAlign="center">
                                Junte-se a uma comunidade de mentores e profissionais que estão redefinindo o mercado de trabalho.
                            </Typography>
                        </Box>
                    </Box>
                    
                    <CardsContainer description="asdasdsa" title="Wellington Ramos Bezerra"></CardsContainer>
                </Tabs.Content>

                <Tabs.Content value="projects" mb={30}>
                    <Heading as="h2" size={{ base: "xl", md: "3xl" }} color="#ff4000" mt={4} mb={2}>
                        HeadHunters / Recrutadores
                    </Heading>
                    <Heading mb={10} fontSize={{ base: "lg", md: "2xl" }}>Encontre os melhores talentos de forma rápida e eficiente com a ExecHub.</Heading>
                    <Typography fontSize={{ base: 16, md: 20 }} mb={10}>
                        Na Exechub, headhunters têm acesso a uma plataforma inovadora para identificar e recrutar os melhores profissionais do mercado.
                    </Typography>

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap="40px" mb={50}>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size={{ base: "xl", md: "2xl" }} mb={2} display={'flex'} alignItems={'center'} alignContent={"center"} >
                                <FaBriefcase size={40} style={{ marginRight: "10px" }} /> Ferramentas de Recrutamento Avançadas
                            </Heading>
                            <Typography fontSize={{ base: 14, md: 16 }}>
                                Utilize ferramentas de recrutamento avançadas para encontrar os candidatos ideais de forma rápida e eficiente. Com a ExecHub, você pode gerenciar todo o processo de recrutamento em um único lugar.
                            </Typography>
                        </Box>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size={{ base: "xl", md: "2xl" }} mb={2} display={'flex'} alignItems={'center'} alignContent={"center"}>
                                <IoBusinessOutline size={40} style={{ marginRight: "10px" }} /> Rede de Talentos
                            </Heading>
                            <Typography fontSize={{ base: 14, md: 16 }}>
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
                            <Heading as="h3" size={{ base: "2xl", md: "4xl" }} mb={2}>
                                Encontre os Melhores Talentos
                            </Heading>
                            <Typography fontSize={{ base: 14, md: 16 }} textAlign="center">
                                Junte-se a uma comunidade de headhunters que estão transformando o processo de recrutamento.
                            </Typography>
                        </Box>
                    </Box>
                    
                    <CardsHeadHunters description="asdasdsa" title="Wellington Ramos Bezerra"></CardsHeadHunters>

                    
                </Tabs.Content>

                <Tabs.Content value="tasks" mb={30}>
                    <Heading as="h2" size={{ base: "xl", md: "3xl" }} color="#ff4000" mt={4} mb={2}>
                        Profissionais
                    </Heading>
                    <Heading mb={10} fontSize={{ base: "lg", md: "2xl" }}>Aprimore suas habilidades e avance na sua carreira com a ExecHub.</Heading>
                    <Typography fontSize={{ base: 16, md: 20 }} mb={10}>
                        Na Exechub, profissionais encontram uma plataforma completa para desenvolvimento de carreira e networking.
                    </Typography>

                    <SimpleGrid columns={{ base: 1, md: 2 }} gap="40px" mb={50}>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size={{ base: "xl", md: "2xl" }} mb={2} display={'flex'} alignItems={'center'} alignContent={"center"} >
                                <LuUserCheck size={40} style={{ marginRight: "10px" }} /> Desenvolvimento Profissional
                            </Heading>
                            <Typography fontSize={{ base: 14, md: 16 }}>
                                Acesse recursos e ferramentas para aprimorar suas habilidades e avançar na sua carreira. Com a ExecHub, você tem acesso a cursos, mentorias e muito mais.
                            </Typography>
                        </Box>
                        <Box height="200" p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                            <Heading as="h3" size={{ base: "xl", md: "2xl" }} mb={2} display={'flex'} alignItems={'center'} alignContent={"center"}>
                                <IoBusinessOutline size={40} style={{ marginRight: "10px" }} /> Oportunidades de Networking
                            </Heading>
                            <Typography fontSize={{ base: 14, md: 16 }}>
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
                            <Heading as="h3" size={{ base: "2xl", md: "4xl" }} mb={2}>
                                Avance na Sua Carreira
                            </Heading>
                            <Typography fontSize={{ base: 14, md: 16 }} textAlign="center">
                                Junte-se a uma comunidade de profissionais que estão se destacando no mercado de trabalho.
                            </Typography>
                        </Box>
                    </Box>
                    
                    <CardsContainer description="asdasdsa" title=""></CardsContainer>

                    <Stack direction={{ base: "column", md: "row" }} wordSpacing={4} justify="center" mt={50} >
                        <Heading as="h3" size={{ base: "xl", md: "4xl" }} mb={2} textAlign={"center"}>
                            Encontre os especialistas de todas as areas evolua sua carreira com a ExecHub.<br></br>
                            Evolua sua carreira com referenciais de mercado.
                        </Heading>
                    </Stack>
                    
                </Tabs.Content>
            </Tabs.Root>
        </Box>
    )
}

export default Segmentation;