import { Box, Heading, SimpleGrid, Tabs } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import { IoBusinessOutline } from "react-icons/io5";
import { LuAArrowUp, LuFolder, LuUser } from "react-icons/lu";
import CardsContainer from "../containers/card";

const Segmentation = () => {
    return (
        <Tabs.Root defaultValue="mentors">
            <Tabs.List>
            <Tabs.Trigger value="mentors">
                <LuUser />
                Mentores / C-LEVEL
            </Tabs.Trigger>
            <Tabs.Trigger value="projects">
                <LuFolder />
                HeadHunters / Recrutadores
            </Tabs.Trigger>
            <Tabs.Trigger value="tasks">
                <LuAArrowUp />
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
                    <LuUser size={50} style={{ marginRight: "10px"}} /> Salas de Aula Personalizadas
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

            <CardsContainer description="asdasdsa" title="asdasdasd"></CardsContainer>

            </Tabs.Content>
            <Tabs.Content value="projects">Manage your projects</Tabs.Content>
            <Tabs.Content value="tasks">
            Manage your tasks for freelancers
            </Tabs.Content>
        </Tabs.Root>
    )
}

export default Segmentation;