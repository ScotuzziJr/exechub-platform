import { Avatar } from '@/components/ui/avatar';
import {
    TimelineConnector,
    TimelineContent,
    TimelineDescription,
    TimelineItem,
    TimelineRoot,
    TimelineTitle,
} from "@/components/ui/timeline";
import BoxDefault from '@/pages/dashboardHelpers/BoxDefault';
import { Box, Heading, HStack, StatLabel, StatRoot, Text } from '@chakra-ui/react';
import { LuHandshake } from "react-icons/lu";

import { FiEdit } from "react-icons/fi";

import { Tag } from "@/components/ui/tag";
import React from 'react';
import Container from '../Container';
import Menu from '../Menu';



const ExperiencesAndProjects: React.FC = () => {
    return <Box mt={8} p={6} borderRadius="md" boxShadow="md" bg={"#121212"} color={"#f1f1f1"}>


        <Box display="flex" justifyContent="space-between" mb={4}>
            <Text fontSize="2xl" fontWeight="bold" mb={4} color={"#ff6a00"}>Experiencias e Projetos</Text>
            <Box display={'flex'} alignItems={'center'} alignContent={'center'}>
                <Box as="button" display="flex" borderColor={"#ff6a00"} borderWidth={1} alignItems="center" bg="#121212" color="#ff6a00" p={1} borderRadius={4} cursor="pointer">
                    <FiEdit size={18} />
                    <Text ml={2}>Editar</Text>
                </Box>
            </Box>

        </Box>
        <Box>
            
            <Box mb={4}>
                {/* Informações da empresa */}
                
                <Box mb={4}>
                    <Box mb={4} display={'flex'} alignItems={'start'} alignContent={'center'} flexDir={"row"}>
                        <Avatar name='Itaú Unibanco' size={'2xl'} mb={2}></Avatar>
                        <Box my={2} ml={4}>
                            <Text fontSize="lg" fontWeight="bold" color="#ffffff">Itaú Unibanco</Text>
                            <Text>Full-time - 1y</Text>
                            <Text>São Paulo - Brasil - Híbrido</Text>
                        </Box>
                    </Box>
                    <Box px={8}>
                        <TimelineRoot>
                            <TimelineItem>
                                <TimelineConnector>
                                    <LuHandshake />
                                </TimelineConnector>
                                <TimelineContent>
                                    <TimelineTitle>Software Enginner</TimelineTitle>
                                    <TimelineDescription>Jul 2024 - Atual</TimelineDescription>
                                    <Text textStyle="sm" whiteSpace="pre-line">{`
                                        Software Engineer | Itaú Unibanco
                                        Community: Shared Experiences PF
                                        360i Digital

                                        I work on the 360i Digital platform, contributing to the technological evolution of Itaú Unibanco with a focus on backend, infrastructure, and systems architecture. My work is dedicated to creating scalable, high-performing, and secure solutions that support the bank’s digital transformation.

                                        Key Responsibilities and Achievements:

                                        Developing high-performance systems using technologies such as Spring Boot, Node.js, and Python, aligned with modern software engineering practices.
                                        Managing and provisioning infrastructure with Terraform, ensuring consistency, scalability, and agility in all deliverables.
                                        Implementing DevOps practices, including Continuous Integration (CI) and Continuous Delivery (CD), to optimize development and deployment cycles.
                                        Leveraging AWS technologies, including Elastic Load Balancer (ELB/NLB), Amazon ECS, Fargate, CloudWatch, S3, Amazon RDS, and IAM, to build and manage high-availability cloud-native solutions.
                                        Orchestrating and containerizing with Docker, ensuring operational efficiency and service scalability.
                                        Continuously monitoring and improving observability to identify and resolve bottlenecks using tools like AWS CloudWatch, Splunk, and Datadog.
                                        Collaborating with multidisciplinary teams to implement robust architectures that meet business requirements and deliver the best end-user experience.
                                    
                                    `}
                                        
                                    </Text>
                                </TimelineContent>
                                
                            </TimelineItem>

                            <TimelineItem>
                                <TimelineConnector>
                                    <LuHandshake />
                                </TimelineConnector>
                                <TimelineContent>
                                    <TimelineTitle>Software Enginner</TimelineTitle>
                                    <TimelineDescription>Fev 2024 - Jul 2024 · 6 mos</TimelineDescription>
                                    <Text textStyle="sm" whiteSpace="pre-line">{`
                                        Software Engineer | Itaú Unibanco
                                        Community: Shared Experiences PF
                                        360i Digital

                                        I work on the 360i Digital platform, contributing to the technological evolution of Itaú Unibanco with a focus on backend, infrastructure, and systems architecture. My work is dedicated to creating scalable, high-performing, and secure solutions that support the bank’s digital transformation.

                                        Key Responsibilities and Achievements:

                                        Developing high-performance systems using technologies such as Spring Boot, Node.js, and Python, aligned with modern software engineering practices.
                                        Managing and provisioning infrastructure with Terraform, ensuring consistency, scalability, and agility in all deliverables.
                                        Implementing DevOps practices, including Continuous Integration (CI) and Continuous Delivery (CD), to optimize development and deployment cycles.
                                        Leveraging AWS technologies, including Elastic Load Balancer (ELB/NLB), Amazon ECS, Fargate, CloudWatch, S3, Amazon RDS, and IAM, to build and manage high-availability cloud-native solutions.
                                        Orchestrating and containerizing with Docker, ensuring operational efficiency and service scalability.
                                        Continuously monitoring and improving observability to identify and resolve bottlenecks using tools like AWS CloudWatch, Splunk, and Datadog.
                                        Collaborating with multidisciplinary teams to implement robust architectures that meet business requirements and deliver the best end-user experience.
                                    
                                    `}

                                    </Text>
                                </TimelineContent>
                            </TimelineItem>
                        </TimelineRoot>
                    </Box>                 
                </Box>

                <Box mb={4}>
                    <Box mb={4} display={'flex'} alignItems={'start'} alignContent={'center'} flexDir={"row"}>
                        <Avatar name='Itaú Unibanco' size={'2xl'} mb={2}></Avatar>
                        <Box my={2} ml={4}>
                            <Text fontSize="lg" fontWeight="bold" color="#ffffff">Aoop Cloud Solutions</Text>
                            <Text>Full-time - Aug 2023 - Jan 2024 · 6 mos</Text>
                            <Text>São Paulo - Brasil - Remoto</Text>
                        </Box>
                    </Box>
                    <Box px={8}>
                        <TimelineRoot>
                            <TimelineItem>
                                <TimelineConnector>
                                    <LuHandshake />
                                </TimelineConnector>
                                <TimelineContent>
                                    <TimelineTitle>Software Enginner</TimelineTitle>
                                    <TimelineDescription>Jul 2024 - Atual</TimelineDescription>
                                    <Text textStyle="sm" whiteSpace="pre-line">{`
                                        As a Senior Systems Analyst, I was responsible for collaborating on systems and infrastructure projects, utilizing the ITOM - ServiceNow tool to enhance IT process management and automation. I also worked with the Banco XP client, which brought additional challenges and opportunities to my role. Here’s a summary of my activities:

                                        Infrastructure Management: I oversaw the configuration, monitoring, and maintenance of IT infrastructure, ensuring reliable and efficient operations. Using ITOM - ServiceNow, I automated and managed operations, improving process efficiency and visibility.

                                        Development and Integration: I developed and integrated custom solutions within ServiceNow, creating workflows and automations tailored to specific needs, including those of Banco XP. This involved optimizing the management of incidents, problems, and changes, making processes more agile and effective.
                                    
                                    `}

                                    </Text>
                                </TimelineContent>

                            </TimelineItem>
                        </TimelineRoot>
                    </Box>

                    
                </Box>
                

                <Box mb={4}>
                    <Box mb={4} display={'flex'} alignItems={'start'} alignContent={'center'} flexDir={"row"}>
                        <Avatar name='Itaú Unibanco' size={'2xl'} mb={2}></Avatar>
                        <Box my={2} ml={4}>
                            <Text fontSize="lg" fontWeight="bold" color="#ffffff">FCamara Consulting & Training</Text>
                            <Text>Full-time - 1 ano 4 meses</Text>
                            <Text>São Paulo - Brasil - Remoto</Text>
                        </Box>
                    </Box>
                    <Box px={8}>
                        <TimelineRoot>
                            <TimelineItem>
                                <TimelineConnector>
                                    <LuHandshake />
                                </TimelineConnector>
                                <TimelineContent>
                                    <TimelineTitle>Senior Software Enginner</TimelineTitle>
                                    <TimelineDescription>Apr 2022 - Jul 2023 - 1 ano 4 meses</TimelineDescription>
                                    <Text textStyle="sm" whiteSpace="pre-line">{`
                                        Software Engineering Consultant | C6 Bank

                                        I worked as a Software Engineering Consultant at C6 Bank, where I was responsible for developing a sophisticated PJ account management mechanism.

                                        This system was designed to manage and control user actions within PJ accounts through a robust set of rules and permissions.

                                        My role involved creating a solution that ensured compliance and security for operations performed by users, providing efficient and centralized management of permissions and actions within the account.

                                        I utilized a development stack that included Java and Kotlin for backend development, ReactJS for building the user interface, and AWS for infrastructure, delivering a scalable, secure solution aligned with industry best practices.
                                    `}

                                    </Text>
                                </TimelineContent>

                            </TimelineItem>
                        </TimelineRoot>
                    </Box>


                </Box>
            </Box>
        </Box>
    </Box>
}

const ProfileInfos: React.FC = () => { 
    return <Box mt={8} p={6} borderRadius="md" boxShadow="md" bg={"#121212"} color={"#f1f1f1"}>


        <Box display="flex" justifyContent="space-between" mb={4}>
            <Text fontSize="2xl" fontWeight="bold" mb={4} color={"#ff6a00"}>Informações Principais</Text>
            <Box display={'flex'} alignItems={'center'} alignContent={'center'}>
                <Box as="button" display="flex" borderColor={"#ff6a00"} borderWidth={1} alignItems="center" bg="#121212" color="#ff6a00" p={1} borderRadius={4} cursor="pointer">
                    <FiEdit size={18} />
                    <Text ml={2}>Editar</Text>
                </Box>
            </Box>

        </Box>
        <Box>
            <StatRoot p={2} >
                <StatLabel>Nome</StatLabel>
                <Text style={{ fontWeight: 600, fontSize: 17 }}>Wellington Ramos Bezerra</Text>
            </StatRoot>
            <StatRoot p={2} >
                <StatLabel>Email</StatLabel>
                <Text style={{ fontWeight: 600, fontSize: 17 }}>wellingtons.bezerra@hotmail.com</Text>
            </StatRoot>
            <Box mb={4}>
                <StatRoot p={2} >
                    <StatLabel>Especialidades</StatLabel>
                </StatRoot>

                <Box p={2}>
                    <HStack>
                        <Tag background="#ff6a00" size="lg" color={"#010101"}>Java</Tag>
                        <Tag background="#ff6a00" size="lg" color={"#010101"}>Solid</Tag>
                        <Tag background="#ff6a00" size="lg" color={"#010101"}>Staff Path</Tag>
                    </HStack>
                </Box>
            </Box>
            <StatRoot borderRadius={8} border={'1px solid #403e3e'} p={2} >
                <StatLabel>Bio</StatLabel>
                <Text p={5} style={{ fontWeight: 600, fontSize: 17, textAlign: "justify" }}>Software Engineer with solid experience in the financial sector, specializing in driving critical technologies and IT process automation in banking systems. Throughout my career, I have spearheaded technological innovation initiatives, consistently focusing on optimizing the efficiency and security of software deliveries.
                    My expertise lies in backend development and system architecture, encompassing languages such as Java, Node.js, and Python, while applying DevOps principles to ensure seamless and robust system integration. Additionally, I am recognized for my ability to resolve complex projects, actively supporting strategy and business teams—including Product Managers (PMs), Product Owners (POs), and related areas—in delivering solutions that add value and drive organizational success.</Text>
            </StatRoot>
        </Box>
    </Box>
}

const Skills: React.FC = () => { 
    return <Box mt={8} p={6} borderRadius="md" boxShadow="md" bg={"#121212"} color={"#f1f1f1"}>


        <Box display="flex" justifyContent="space-between" mb={4}>
            <Box>
                <Text fontSize="2xl" fontWeight="bold" mb={4} color={"#ff6a00"}>Skills</Text>
                <Text fontSize="xl" fontWeight="bold" mb={4} color={"#f1f1f1"}>Liste as principais habilidades adquiridas ao longo da sua carreira</Text>
            </Box>
            
            <Box display={'flex'} alignItems={'center'} alignContent={'center'}>
                <Box as="button" display="flex" borderColor={"#ff6a00"} borderWidth={1} alignItems="center" bg="#121212" color="#ff6a00" p={1} borderRadius={4} cursor="pointer">
                    <FiEdit size={18} />
                    <Text ml={2}>Editar</Text>
                </Box>
            </Box>

        </Box>
        <Box>
            <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap={4}>
                <Box p={4} borderRadius="md" boxShadow="md" bg="#1a1a1a" color="#f1f1f1">
                    <Text fontSize="lg" fontWeight="bold" color="#ff6a00">Java</Text>
                    <Text mt={2}>Experience with Java development, including Spring Boot and enterprise applications.</Text>
                </Box>
                <Box p={4} borderRadius="md" boxShadow="md" bg="#1a1a1a" color="#f1f1f1">
                    <Text fontSize="lg" fontWeight="bold" color="#ff6a00">Node.js</Text>
                    <Text mt={2}>Proficient in building scalable backend services using Node.js and Express.</Text>
                </Box>
                <Box p={4} borderRadius="md" boxShadow="md" bg="#1a1a1a" color="#f1f1f1">
                    <Text fontSize="lg" fontWeight="bold" color="#ff6a00">Python</Text>
                    <Text mt={2}>Experienced in Python scripting and automation, as well as web development with Django.</Text>
                </Box>
                <Box p={4} borderRadius="md" boxShadow="md" bg="#1a1a1a" color="#f1f1f1">
                    <Text fontSize="lg" fontWeight="bold" color="#ff6a00">AWS</Text>
                    <Text mt={2}>Skilled in AWS services including EC2, S3, RDS, and Lambda for cloud solutions.</Text>
                </Box>
                <Box p={4} borderRadius="md" boxShadow="md" bg="#1a1a1a" color="#f1f1f1">
                    <Text fontSize="lg" fontWeight="bold" color="#ff6a00">Docker</Text>
                    <Text mt={2}>Experience with containerization and orchestration using Docker and Kubernetes.</Text>
                </Box>
                <Box p={4} borderRadius="md" boxShadow="md" bg="#1a1a1a" color="#f1f1f1">
                    <Text fontSize="lg" fontWeight="bold" color="#ff6a00">Terraform</Text>
                    <Text mt={2}>Proficient in infrastructure as code using Terraform for cloud resource management.</Text>
                </Box>
                <Box p={4} borderRadius="md" boxShadow="md" bg="#1a1a1a" color="#f1f1f1">
                    <Text fontSize="lg" fontWeight="bold" color="#ff6a00">React</Text>
                    <Text mt={2}>Experienced in building dynamic user interfaces with React and TypeScript.</Text>
                </Box>
                <Box p={4} borderRadius="md" boxShadow="md" bg="#1a1a1a" color="#f1f1f1">
                    <Text fontSize="lg" fontWeight="bold" color="#ff6a00">DevOps</Text>
                    <Text mt={2}>Skilled in CI/CD pipelines, automation, and monitoring using tools like Jenkins and GitLab CI.</Text>
                </Box>
            </Box>
            
        </Box>
    </Box>
}

const Profile: React.FC = () => {
    return (
        <Box>
            <Menu />
            <Container>
                <BoxDefault>
                    <Heading as="h2" size="3xl" mb={2} color="#ff4000">Meu Perfil</Heading>
                    <Text fontSize="larger">
                        Acompanhe o crescimento de conexões e visualizações do seu perfil. 🚀
                    </Text>
                    <Box zIndex={100} position={"relative"}>
                        

                        <Box display="flex" justifyContent="space-around" mt={4}>

                            <StatRoot bg={'#010101'} borderRadius={8} border={'1px solid #ff6a00'} p={2} m={4}>
                                <StatLabel>Conexões</StatLabel>
                                <Text style={{ fontWeight: 600, fontSize: 26 }}>935.40</Text>
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

                <ProfileInfos />

                <ExperiencesAndProjects />

                <Skills />
            </Container>
        </Box>
    );
};

export default Profile;