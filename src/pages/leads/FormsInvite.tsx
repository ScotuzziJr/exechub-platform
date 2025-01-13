import {
    RadioCardItem,
    RadioCardRoot
} from "@/components/ui/radio-card";
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Box, Button, Heading, HStack, Input, Link, Text } from '@chakra-ui/react';

import { Toaster, toaster } from "@/components/ui/toaster";
import React, { useEffect, useState } from 'react';
import ExecHubLogo from '../../assets/images/logo_branco.png';
import { orangeDefault } from "../tokensColors/tokens";

const FormsInvite: React.FC = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    const [successHandler, setSuccesHandler] = useState(false)


    const saveLead = async () => {

        try {
            const requestSaveLead = await fetch("http://localhost:8000/api/lead", {
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

            if (requestSaveLead.status == 201) {
                toaster.success({
                    description: "Dados enviados com sucesso! 🥳🎉",
                    type: "info",
                    duration: 5000
                });

                setSuccesHandler(true)
            }
        } catch (err) {
            toaster.error({
                description: "Houve um erro ao enviar os dados. 😬",
                type: "error",
                duration: 5000
            });
        }
        

        
    }


    useEffect(() => {
        console.log(name)
        console.log(email)
        console.log(role)
    }, [name, email, role])


    const items = [
        { value: "0", title: "Headhunter - Buscando profissionais", description: "Descubra talentos excepcionais e ajude a elevar sua empresa ao próximo nível com nossa ajuda especializada." },
        { value: "1", title: "Ser um mentor(a)", description: "Compartilhe sua experiência e inspire a próxima geração de líderes, tornando-se um mentor(a) e fazendo a diferença no mundo corporativo." },
        { value: "2", title: "Nova contratação", description: "Encontre a oportunidade perfeita e impulsione sua carreira com nossas vagas exclusivas." },
        { value: "3", title: "Atuar modelo Open Talent - C-levels", description: "Aproveite a flexibilidade e o dinamismo do modelo Open Talent para liderar projetos estratégicos e transformar organizações." },
    ]

    return (
        <Box 
            padding={{
                base: "1rem",
                sm: "4px",
                md: "8px",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            background="linear-gradient(154deg, hsl(0deg 0% 0%),rgb(0, 0, 0),#ff4000,#000000);"
        >
            <Box w={{ base: "12/12", sm: "12/12", md: "10/12", lg: "6/12" }} borderWidth={1} borderRadius="lg" bgColor="#010101" p={{
                base: "40px",

            }}>
                <Box mb={10}>
                    <Box position={"relative"}>
                        <img src={ExecHubLogo} alt="Logo" style={{ height: '250px', width: 'auto' }} />
                        <Box
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
                        </Box>
                    </Box>
                    
                    <Heading as="h2" size="3xl" mb={2} color="#ff4000">Descubra oportunidades incríveis com a gente! 😉</Heading>
                    <Text>Seja um dos primeiros a experimentar a ExecHub! Preencha seus dados e tenha acesso <b color="#ff6a00">exclusivo 🚀</b> à plataforma que transforma carreiras e conecta talentos excepcionais a empresas de sucesso.</Text>

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
                            }

                            if (!emailRegex.test(email)) {
                                toaster.create({
                                    description: "Por favor, insira um e- mail válido.",
                                    type: "info",
                                    duration: 5000
                                });
                            }

                            saveLead();

                        }}
                    
                    >
                        <FormControl id="name" mb={10}>
                            <FormLabel color={"#fff"} mb={5}>Nome</FormLabel>
                            <Input type="text" onChange={(e) => setName(e.target.value)}/>
                        </FormControl>
                        <FormControl id="email" mb={10}>
                            <FormLabel color={"#fff"} mb={5}>E-mail</FormLabel>
                            <Input type="email" onChange={(e) => setEmail(e.target.value)} />
                        </FormControl>


                        <Box mt={6} >
                            <RadioCardRoot defaultValue="next" style={{ borderColor: '#ff6a00' }} >
                                <Heading as="h2" size="3xl" mb={2} color="#ff4000">Queremos saber mais sobre você!</Heading>
                                <Text mb={20}>Estamos ansiosos para ajudar você e ter você dentro da exechub, agora preencha as informações abaixo.</Text>
                                <HStack align="stretch" display={"flex"} flexDirection={"column"}  wrap="wrap" wordSpacing={2}>
                                    {items.map((item) => (
                                        <RadioCardItem
                                            label={item.title}
                                            description={item.description}
                                            key={item.value}
                                            value={item.value}
                                            onClick={(e) => setRole(item.value)}
                                            style={{
                                                flex: '1 2 calc(50% - 1rem)',
                                                marginBottom: '1rem',
                                            }}
                                        />
                                    ))}
                                </HStack>
                            </RadioCardRoot>
                            <Button type="submit" variant="outline" color={"#ff6a00"} w={200} >Quero participar! 🤩</Button>
                        </Box>
                        
                        
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default FormsInvite;