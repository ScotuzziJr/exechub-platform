import {
    RadioCardItem,
    RadioCardLabel,
    RadioCardRoot,
} from "@/components/ui/radio-card";
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Box, Button, Heading, HStack, Input, Text } from '@chakra-ui/react';

import React from 'react';
import ExecHubLogo from '../../assets/images/logo_branco.png';

const FormsInvite: React.FC = () => {
    const items = [
        { value: "nova_contratacao", title: "Nova contratação", description: "Encontre a oportunidade perfeita e impulsione sua carreira com nossas vagas exclusivas." },
        { value: "headhunter", title: "Headhunter - Buscando profissionais", description: "Descubra talentos excepcionais e ajude a elevar sua empresa ao próximo nível com nossa ajuda especializada." },
        { value: "mentor_mentora", title: "Ser um mentor(a)", description: "Compartilhe sua experiência e inspire a próxima geração de líderes, tornando-se um mentor(a) e fazendo a diferença no mundo corporativo." },
        { value: "open_talent", title: "Atuar modelo Open Talent - C-levels", description: "Aproveite a flexibilidade e o dinamismo do modelo Open Talent para liderar projetos estratégicos e transformar organizações." },
    ]

    return (
        <Box 
            padding={{
                base: "1rem",
                sm: "4px",
                md: "8px",
                lg: "16px",
            }}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            <Box w={{ base: "12/12", sm: "12/12", md: "6/12", lg: "6/12" }} borderWidth={1} borderRadius="lg" p={4}>
                <Box>
                    <img src={ExecHubLogo} alt="Logo" style={{ height: '250px', width: 'auto' }} />
                    <Heading as="h1" size="2xl" mb={4}>Descubra oportunidades incríveis conosco! 😉</Heading>
                    <Text>Preencha seus dados e garanta acesso <b color="#ff6a00">gratuito 🤯</b> à ExecHub, a plataforma que transforma carreiras e conecta talentos excepcionais a empresas de sucesso.</Text>
                </Box>
                
                
                <Box mt={10}>
                    <form>
                        <FormControl id="name" mb={4}>
                            <FormLabel color={"#ff6a00"}>Nome</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="email" mb={4}>
                            <FormLabel color={"#ff6a00"}>E-mail</FormLabel>
                            <Input type="email" />
                        </FormControl>


                        <Box mt={6}>
                            <RadioCardRoot defaultValue="next" style={{ borderColor: '#ff6a00' }} >
                                <RadioCardLabel fontSize={26} mb={10} lineHeight={1.2}>Escolha a opção ideal para o seu perfil!</RadioCardLabel>
                                <HStack align="stretch" display={"flex"} flexDirection={"column"}  wrap="wrap">
                                    {items.map((item) => (
                                        <RadioCardItem
                                            label={item.title}
                                            description={item.description}
                                            key={item.value}
                                            value={item.value}
                                            style={{
                                                flex: '1 2 calc(50% - 1rem)',
                                                marginBottom: '1rem',
                                            }}
                                        />
                                    ))}
                                </HStack>
                            </RadioCardRoot>
                        </Box>
                        
                        <Button type="submit" variant="outline" color={"#ff6a00"}>Send Invite</Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default FormsInvite;