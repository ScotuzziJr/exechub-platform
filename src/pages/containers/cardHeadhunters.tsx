import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Box, Card, Heading, HStack } from "@chakra-ui/react";
import { Rating, Typography } from "@mui/material";

import { Tag } from "@/components/ui/tag";

interface CardProps {
    title: string;
    description: string;
}

const CardsHeadHunters = ({ title, description }: CardProps) => {
    return (
        <Box mt={60}>
            <Heading as="h3" size="4xl" mb={30} mt={50}>
                Conecte-se com <b style={{
                    color: "#ff4000"
                }}>especialistas</b> e <b style={{
                    color: "#ff4000"
                }}>recrute</b> talentos de <b style={{
                    color: "#ff4000"
                }}>nível C</b> com a <b style={{
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
                <Card.Root width="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                    <Card.Header>
                        <Card.Title>{title}</Card.Title>
                    </Card.Header>
                    <Card.Body gap="2">
                        <Avatar
                            src="https://picsum.photos/200/300"
                            name="Nue Camp"
                            size="2xl"
                            shape="rounded"
                        />
                        <Box>
                            <Typography fontSize={16}>
                                Senior Software Engineer at Google
                            </Typography>
                        </Box>
                        <Rating value={5} size="medium" readOnly />

                        <Card.Description textAlign={'start'}>
                            Nue Camp é um engenheiro de software sênior com mais de 10 anos de experiência, especializado em desenvolvimento full-stack e liderança de projetos bem-sucedidos.
                        </Card.Description>
                        <Box>
                            <HStack>
                                <Tag background="orange" size="lg">Java</Tag>
                                <Tag background="orange" size="lg">Solid</Tag>
                                <Tag background="orange" size="lg">Staff Path</Tag>
                            </HStack>
                        </Box>
                    </Card.Body>

                    <Card.Footer justifyContent="flex-end">

                        <Button variant="outline">View</Button>
                        <Button>Join</Button>
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                    <Card.Header>
                        <Card.Title>{title}</Card.Title>
                    </Card.Header>
                    <Card.Body gap="2">
                        <Avatar
                            src="https://picsum.photos/200/300"
                            name="Nue Camp"
                            size="2xl"
                            shape="rounded"
                        />
                        <Box>
                            <Typography fontSize={16}>
                                Senior Software Engineer at Google
                            </Typography>
                        </Box>
                        <Rating value={5} size="medium" readOnly />

                        <Card.Description textAlign={'start'}>
                            Nue Camp é um engenheiro de software sênior com mais de 10 anos de experiência, especializado em desenvolvimento full-stack e liderança de projetos bem-sucedidos.
                        </Card.Description>
                        <Box>
                            <HStack>
                                <Tag background="orange" size="lg">Java</Tag>
                                <Tag background="orange" size="lg">Solid</Tag>
                                <Tag background="orange" size="lg">Staff Path</Tag>
                            </HStack>
                        </Box>
                    </Card.Body>

                    <Card.Footer justifyContent="flex-end">

                        <Button variant="outline">View</Button>
                        <Button>Join</Button>
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                    <Card.Header>
                        <Card.Title>{title}</Card.Title>
                    </Card.Header>
                    <Card.Body gap="2">
                        <Avatar
                            src="https://picsum.photos/200/300"
                            name="Nue Camp"
                            size="2xl"
                            shape="rounded"
                        />
                        <Box>
                            <Typography fontSize={16}>
                                Senior Software Engineer at Google
                            </Typography>
                        </Box>
                        <Rating value={5} size="medium" readOnly />

                        <Card.Description textAlign={'start'}>
                            Nue Camp é um engenheiro de software sênior com mais de 10 anos de experiência, especializado em desenvolvimento full-stack e liderança de projetos bem-sucedidos.
                        </Card.Description>
                        <Box>
                            <HStack>
                                <Tag background="orange" size="lg">Java</Tag>
                                <Tag background="orange" size="lg">Solid</Tag>
                                <Tag background="orange" size="lg">Staff Path</Tag>
                            </HStack>
                        </Box>
                    </Card.Body>

                    <Card.Footer justifyContent="flex-end">

                        <Button variant="outline">View</Button>
                        <Button>Join</Button>
                    </Card.Footer>
                </Card.Root>
                <Card.Root width="500px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md">
                    <Card.Header>
                        <Card.Title>{title}</Card.Title>
                    </Card.Header>
                    <Card.Body gap="2">
                        <Avatar
                            src="https://picsum.photos/200/300"
                            name="Nue Camp"
                            size="2xl"
                            shape="rounded"
                        />
                        <Box>
                            <Typography fontSize={16}>
                                Senior Software Engineer at Google
                            </Typography>
                        </Box>
                        <Rating value={5} size="medium" readOnly />

                        <Card.Description textAlign={'start'}>
                            Nue Camp é um engenheiro de software sênior com mais de 10 anos de experiência, especializado em desenvolvimento full-stack e liderança de projetos bem-sucedidos.
                        </Card.Description>
                        <Box>
                            <HStack>
                                <Tag background="orange" size="lg">Java</Tag>
                                <Tag background="orange" size="lg">Solid</Tag>
                                <Tag background="orange" size="lg">Staff Path</Tag>
                            </HStack>
                        </Box>
                    </Card.Body>

                    <Card.Footer justifyContent="flex-end">

                        <Button variant="outline">View</Button>
                        <Button>Join</Button>
                    </Card.Footer>
                </Card.Root>
            </Box>
        </Box>
    )
}
export default CardsHeadHunters;
