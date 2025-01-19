import {
    RadioCardItem,
    RadioCardRoot
} from "@/components/ui/radio-card";
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Box, Button, Heading, HStack, Input, Link, Text } from '@chakra-ui/react';

import { Toaster, toaster } from "@/components/ui/toaster";
import { EXECHUB_BACKEND } from "@/infra/http";
import React, { useState } from 'react';
import ExecHubLogo from '../../assets/images/logo_branco.png';

const FormsInvite: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    const [successHandler, setSuccesHandler] = useState(false)


    const saveLead = async () => {

        try {
            const requestSaveLead = await fetch(`${EXECHUB_BACKEND}/api/lead`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Origin": "http://localhost:5173"
                },
                body: JSON.stringify({
                    "name": name,
                    "email": email,
                    "role": parseInt(role)
                })
            });

            if (requestSaveLead.status == 204) {
                toaster.create({
                    description: "Ops! Esse endereço de email já foi cadastrado.",
                    type: "info",
                    duration: 5000
                });
            }

            if (requestSaveLead.status == 201) {
                toaster.success({
                    description: "Dados enviados com sucesso! 🥳🎉",
                    type: "info",
                    duration: 5000
                });

                setSuccesHandler(true)
            }
        } catch (err) {
            console.warn("[ERROR]: CALL SERVICE ADMIN CODE: 1003")
            toaster.error({
                description: "Houve um erro ao enviar os dados.",
                type: "error",
                duration: 5000
            });
        }
    }

    const items = [
        { value: "0", title: "Headhunter - Buscando profissionais", description: "Descubra talentos excepcionais e ajude a elevar sua empresa ao próximo nível com nossa ajuda especializada." },
        { value: "1", title: "Ser um mentor(a)", description: "Compartilhe sua experiência e inspire a próxima geração de líderes, tornando-se um mentor(a) e fazendo a diferença no mundo corporativo." },
        { value: "2", title: "Nova contratação", description: "Encontre a oportunidade perfeita e impulsione sua carreira com nossas vagas exclusivas." },
        { value: "3", title: "Atuar modelo Open Talent - C-levels", description: "Aproveite a flexibilidade e o dinamismo do modelo Open Talent para liderar projetos estratégicos e transformar organizações." },
    ]

    return (
        <>
            {!successHandler && <Box
                padding={{
                    base: "1rem",
                    sm: "4px",
                    md: "8px",
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                h={"12/12"}
                background="linear-gradient(154deg, hsl(0deg 0% 0%),rgb(0, 0, 0),#ff4000,#000000);"
            >
                <Box w={{ base: "12/12", sm: "12/12", md: "10/12", lg: "6/12" }} borderWidth={1} borderRadius="lg" bgColor="#010101" p={{
                    base: "40px",

                }}>
                    <Box mb={10}>
                        <Box position={"relative"}>
                            <img src={ExecHubLogo} alt="Logo" style={{ height: '250px', width: 'auto' }} />
                            {/* <Box
                                as="svg"
                                position="absolute"
                                top="0%"
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
                                top="4%"
                                left="75%"
                                width="100px"
                                height="100px"
                                rotate="50deg"
                            >
                                <polygon
                                    points="50,0 100,100 0,100"
                                    fill="#f4f4f4"
                                />
                            </Box> */}
                        </Box>

                        <Heading as="h2" size="3xl" mb={2} color="#ff4000">Descubra oportunidades incríveis com a ExecHub!</Heading>
                        <Text>Seja um dos primeiros a experimentar a ExecHub! Preencha seus dados e tenha acesso <b color="#ff6a00">exclusivo</b> à plataforma que transforma carreiras e conecta talentos excepcionais a empresas de sucesso.</Text>

                        <Link href="https://www.facebook.com/exechub" mt={4}>
                            Visite nosso site!
                        </Link>
                    </Box>


                    <Box mt={10} >
                        <Toaster />
                        <form style={{
                            alignContent: "stretch",
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            wordSpacing: "2px",
                        }}
                            onSubmit={(e) => {
                                e.preventDefault()

                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                                if (name == "" || email == "" || role == "") {
                                    toaster.create({
                                        description: "Ops! Parece que alguns dados estão incorretos. Verifique e tente novamente!",
                                        type: "info",
                                        duration: 5000
                                    });
                                } else if (!emailRegex.test(email)) {
                                    toaster.create({
                                        description: "Por favor, insira um e- mail válido.",
                                        type: "info",
                                        duration: 5000
                                    });
                                } else {
                                    saveLead();
                                }
                            }}

                        >
                            <FormControl id="name" mb={10}>
                                <FormLabel color={"#fff"} mb={5}>Nome</FormLabel>
                                <Input type="text" onChange={(e) => setName(e.target.value)} />
                            </FormControl>
                            <FormControl id="email" mb={10}>
                                <FormLabel color={"#fff"} mb={5}>E-mail</FormLabel>
                                <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                            </FormControl>


                            <Box mt={6} >
                                <RadioCardRoot defaultValue="next" style={{ borderColor: '#ff6a00' }} >
                                    <Heading as="h2" size="3xl" mb={2} color="#ff4000">Queremos saber mais sobre você!</Heading>
                                    <Text mb={20}>Estamos muito felizes em tê-lo conosco na Exechub! Preencha as informações abaixo e conte com a gente para ajudá-lo em cada passo dessa jornada.</Text>
                                    <HStack align="stretch" display={"flex"} flexDirection={"column"} wrap="wrap" wordSpacing={2}>
                                        {items.map((item) => (
                                            <RadioCardItem
                                                label={item.title}
                                                description={item.description}
                                                key={item.value}
                                                value={item.value}
                                                onClick={(e) => {
                                                    console.log(e.nativeEvent.target)
                                                    setRole(item.value)
                                                }
                                                }
                                                style={{
                                                    flex: '1 2 calc(50% - 1rem)',
                                                    marginBottom: '1rem',
                                                }}
                                            />
                                        ))}
                                    </HStack>
                                </RadioCardRoot>
                                <Button type="submit" variant="outline"  w={200} >Garantir meu acesso!</Button>
                            </Box>
                        </form>
                    </Box>
                </Box></Box>}

            {successHandler && <Box
                padding={{
                    base: "1rem",
                    sm: "4px",
                    md: "8px",
                }}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                h={"100vh"}
                background="linear-gradient(154deg, hsl(0deg 0% 0%),rgb(0, 0, 0),#ff4000,#000000);"
            >
                <Box w={{ base: "8/12", sm: "12/12", md: "10/12", lg: "6/12" }} h={"full"} borderWidth={1} borderRadius="lg" bgColor="#010101" p={{
                    base: "40px"
                }}>
                    <Box textAlign="center"></Box>
                        <img src="https://img.icons8.com/color/96/000000/checked.png" alt="Success" style={{ height: '100px', width: 'auto' }} />
                        <Heading as="h2" size="2xl" mb={4} color="green.400">Dados enviados com sucesso!</Heading>
                        <Text fontSize="lg" color="#c2c2c2">Estamos bem feliz por ter você com a Exechub, novas possibilidades estão por vir!</Text>
                        <Text fontSize="lg" mt={10} color="#c7c7c7">Não esqueça de seguir nas redes e visualize sua caixa de spam enviamos uma mensagem de boas vindas! 🍾</Text>
                        <Link href="https://exechub.com.br" mt={4} color="#ff6a00">
                            Voltar ao site
                        </Link>
                    </Box>
                </Box>}
        </>
    );
};

export default FormsInvite;