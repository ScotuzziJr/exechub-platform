import { Avatar } from "@/components/ui/avatar";
import { Box, Link, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';


import { BsAwardFill } from "react-icons/bs";
import { FaCalendarAlt, FaLinkedin } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { ImProfile } from "react-icons/im";
import { IoWalletOutline } from 'react-icons/io5';
import { RiContractFill } from "react-icons/ri";
import ExecHubLogo from '../../assets/images/logo_laranja.png';
import { orangeDefault } from '../tokensColors/tokens';

const Menu: React.FC = () => {
    const [open, setOpen] = useState(false)
    const [openConfig, setOpenConfig] = useState(false)

    return (
    
            <Box display="flex" position={"fixed"} paddingRight={20}>
                
                <VStack
                    as="nav"
                    align="stretch"
                    zIndex={9}
                    wordSpacing={4}
                    bg="#121212"
                    color="white"
                    p={4}
                    minW="280px"
                height="100vh"
                borderRightWidth={1}
                borderColor="#414141"
                >
                    <Box mb={10}>
                    <img src={ExecHubLogo} alt="Logo" style={{ maxWidth: '100px' }} />
                    <Text color={"#f1f1f1"}>Plataforma ExecHub</Text>
                        <Box display={'flex'} mt={5}>
                            <Avatar mx={5} name="Wellington Ramos Bezerra" />
                            <Box>
                                <Text textStyle="sm">Wellington Bezerra</Text>
                                <Text textStyle="sm">Senior Software Enginner</Text>
                                <Link fontSize={14} href={"#"}>
                                    <Box _hover={{ bg: orangeDefault }}>
                                        <FaLinkedin size={22} />
                                    </Box>
                                </Link>
                            </Box>

                        </Box>

                    </Box>

                    {/* Atalhos */}
                    <Box>

                    
                    <Text textStyle="sm" mb={1} mt={3} p={2} borderBottomWidth={1} borderColor={"#F3F3F3"}> Atalhos </Text>
                    
                    
                    <Box display={'flex'} flexDirection={'column'} h={200} p={4} borderRadius={8}>
                        <Link fontSize={14} href={"#"} p={2} _hover={{ bg: orangeDefault }} display="flex" alignItems="center">
                            <FiHome size={22} style={{ marginRight: '8px' }} />
                            Página Inicial
                        </Link>
                        <Link fontSize={14} href={"#"} p={2} _hover={{ bg: orangeDefault }} display="flex" alignItems="center">
                            <ImProfile size={22} style={{ marginRight: '8px' }} />
                            Gerenciar Perfil
                        </Link>
                        <Link fontSize={14} href={"#"} p={2} _hover={{ bg: orangeDefault }} display="flex" alignItems="center">
                            <BsAwardFill size={22} style={{ marginRight: '8px' }} />
                            Mentoria
                        </Link>
                    </Box>
                    </Box>

                    {/* Produtos */}
                    <Box>
                    <Text textStyle="sm" mb={1} mt={3} borderBottomWidth={1} borderColor={"#F3F3F3"} p={2}>Produtos</Text>

                        <Box display={'flex'} flexDirection={'column'} h={200} p={4} borderRadius={8}>
                            <Link fontSize={14} href={"#"} p={2} _hover={{ bg: orangeDefault }} display="flex" alignItems="center">

                                <IoWalletOutline size={22} style={{ marginRight: '8px' }} />
                                Pagamentos
                            </Link>
                            <Link fontSize={14} href={"#"} p={2} _hover={{ bg: orangeDefault }} display="flex" alignItems="center">
                                <FaCalendarAlt size={22} style={{ marginRight: '8px' }} />
                                Agendas
                            </Link>
                            <Link fontSize={14} href={"#"} p={2} _hover={{ bg: orangeDefault }} display="flex" alignItems="center">
                                <HiOutlineRocketLaunch size={22} style={{ marginRight: '8px' }} />
                                Mentoria
                            </Link>
                            <Link fontSize={14} href={"#"} p={2} _hover={{ bg: orangeDefault }} display="flex" alignItems="center">
                                <RiContractFill size={22} style={{ marginRight: '8px' }} />
                                Contratar
                            </Link>
                        </Box>
                    </Box>
                </VStack>

            </Box>
        
    );
};

export default Menu;