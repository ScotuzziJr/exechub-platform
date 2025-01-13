import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Box, Card, Heading, HStack } from "@chakra-ui/react";
import { Rating, Typography } from "@mui/material";

import { Tag } from "@/components/ui/tag";

interface CardProps {
    title: string;
    description: string;
}

const CardsContainer = ({ title, description }: CardProps) => {
    return (
        <Box mt={60}>
            <Heading as="h3" size="4xl" mb={30} mt={50}>
                Ganhe <b style={{
                    color: "#ff4000"
                }}>notoriedade</b> e <b style={{
                    color: "#ff4000"
                }}>impacte</b> carreiras com a <b style={{
                    color: "#ff4000"
                }}>ExecHub</b>.
            </Heading>
            <Box
                display="grid"
                alignContent="center"
                justifyItems="center"
                alignItems="start"
                gridGap="20px"
                gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            >
                <Card.Root  borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                    <Card.Header>
                        <Card.Title>Gustavo Kinich</Card.Title>
                    </Card.Header>
                    <Card.Body gap="2">
                        <Avatar
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            name="Gustavo Kinich"
                            size="2xl"
                            shape="rounded"
                        />
                        <Box>
                            <Typography fontSize={16}>
                                Senior Software Engineer at Guugle
                            </Typography>
                        </Box>
                        <Rating value={5} size="medium" readOnly />

                        <Card.Description textAlign={'start'}>
                            Gustavo Kinich é um engenheiro de software sênior com mais de 10 anos de experiência, especializado em desenvolvimento full-stack e liderança de projetos bem-sucedidos.
                        </Card.Description>
                        <Box>
                            <HStack>
                                <Tag background="" size="lg">Java</Tag>
                                <Tag background="" size="lg">Solid</Tag>
                                <Tag background="" size="lg">Staff Path</Tag>
                            </HStack>
                        </Box>
                    </Card.Body>

                    <Card.Footer justifyContent="flex-end">

                        <Button variant="outline">Contratar</Button>
                        <Button>Mentoria</Button>
                    </Card.Footer>
                </Card.Root>
                <Card.Root  borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                    <Card.Header>
                        <Card.Title>Clarisse Watanabe</Card.Title>
                    </Card.Header>
                    <Card.Body gap="2">
                        <Avatar
                            src="https://randomuser.me/api/portraits/women/2.jpg"
                            name="Jane Doe"
                            size="2xl"
                            shape="rounded"
                        />
                        <Box>
                            <Typography fontSize={16}>
                                Senior Consultant UX Designer at Spot
                            </Typography>
                        </Box>
                        <Rating value={5} size="medium" readOnly />

                        <Card.Description textAlign={'start'}>
                            Clarisse Watanabe é uma designer de UX sênior com mais de 10 anos de experiência, especializada em criar experiências de usuário intuitivas e eficazes, liderando equipes de design em projetos de grande escala.
                        </Card.Description>
                        <Box>
                            <HStack alignItems={"flex-start"}>
                                <Tag background="" size="lg">UX Designer</Tag>
                                <Tag background="" size="lg">Product Manager</Tag>
                                <Tag background="" size="lg">UI Specialist</Tag>
                            </HStack>
                        </Box>
                    </Card.Body>

                    <Card.Footer justifyContent="flex-end">

                        <Button variant="outline">Contratar</Button>
                        <Button>Mentoria</Button>
                    </Card.Footer>
                </Card.Root>
                <Card.Root  borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                    <Card.Header>
                        <Card.Title>Robson Ramos Viana</Card.Title>
                    </Card.Header>
                    <Card.Body gap="2">
                        <Avatar
                            src="https://randomuser.me/api/portraits/men/4.jpg"
                            name="Nue Camp"
                            size="2xl"
                            shape="rounded"
                        />
                        <Box>
                            <Typography fontSize={16}>
                                Senior Executive | CTO at Amaz
                            </Typography>
                        </Box>
                        <Rating value={5} size="medium" readOnly />

                        <Card.Description textAlign={'start'}>
                            Robson Ramos Viana é um executivo sênior com mais de 15 anos de experiência, especializado em tecnologia e liderança estratégica, atualmente atuando como CTO na Amaz.
                        </Card.Description>
                        <Box>
                            <HStack alignItems={"flex-start"}>
                                <Tag  size="lg">Java</Tag>
                                <Tag  size="lg">Golang</Tag>
                                <Tag  size="lg">Staff Path</Tag>
                            </HStack>
                        </Box>
                    </Card.Body>

                    <Card.Footer justifyContent="flex-end">

                        <Button variant="outline">Contratar</Button>
                        <Button>Mentoria</Button>
                    </Card.Footer>
                </Card.Root>
                <Card.Root  borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                    <Card.Header>
                        <Card.Title>Lucas Pollto</Card.Title>
                    </Card.Header>
                    <Card.Body gap="2">
                        <Avatar
                            src="https://randomuser.me/api/portraits/men/5.jpg"
                            name="Lucas Pollto"
                            size="2xl"
                            shape="rounded"
                        />
                        <Box>
                            <Typography fontSize={16}>
                                Senior Software Engineer at Brexs
                            </Typography>
                        </Box>
                        <Rating value={5} size="medium" readOnly />

                        <Card.Description textAlign={'start'}>
                            Lucas Pollto é um engenheiro de software sênior com mais de 10 anos de experiência, especializado em desenvolvimento full-stack e liderança de projetos bem-sucedidos.
                        </Card.Description>
                        <Box>
                            <HStack alignItems={"flex-start"}>
                                <Tag  size="lg">Infraestrutura</Tag>
                                <Tag  size="lg">Head</Tag>
                                <Tag  size="lg">Especialista AWS | IA</Tag>
                            </HStack>
                        </Box>
                    </Card.Body>

                    <Card.Footer justifyContent="flex-end">

                        <Button variant="outline">Contratar</Button>
                        <Button>Mentoria</Button>
                    </Card.Footer>
                </Card.Root>
            </Box>
        </Box>
    )
}
export default CardsContainer;
