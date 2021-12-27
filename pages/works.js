import { Container, Heading, SimpleGrid, Divider, useColorModeValue } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbRenebae from '../public/images/works/renebae_eyecatch.png'
import thumbIsihape from '../public/images/works/isihape_eyecatch.png'
import thumbLerenle from '../public/images/works/lerenle_eyecatch.png'
import thumbRentol from '../public/images/works/rentol_eyecatch.png'
import thumbEnadasama from '../public/images/works/enadasama_eyecatch.png'
import thumbFoodyFoodyay from '../public/images/works/foodyfoodyay_eyecatch.png'
import thumbIDM from '../public/images/works/idm_eyecatch.png'

import Layout from "../components/layouts/article";


const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <Heading as="h2" fontSize={20} mb={5} textAlign="center" color="teal" textShadow='1px 1px #2020233'>Web App</Heading>

                <SimpleGrid columns={[ 1,1,2 ]} gap={6}>
                    <Section>
                        <WorkGridItem id="renebae" title="Renebae" thumbnail={thumbRenebae}>
                            Multi-cross-platform e-commerce app created with Ionic using ReactJS and Firebase as backend
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="lerenle" title="Lerenle" thumbnail={thumbLerenle}>
                            Beautifully designed hotel booking app to showcase hotels and its room. You can book for stay easily with this app.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="rentol" title="Rentol" thumbnail={thumbRentol}>
                            An app that used for users who owns consoles to showcase their console for rent out or for users who want to rent consoles.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="enadasama" title="Enadasama" thumbnail={thumbEnadasama}>
                            Enadasama is a web app that offer food ordering services. You can promote your restaurant and its menu with this app.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="foodyfoodyay" title="Foody-Foodyay" thumbnail={thumbFoodyFoodyay}>
                            A web app for users to check cooking recipe and ingredients nutrition.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Heading as="h2" fontSize={20} mb={5} textAlign="center" color="teal" textShadow='1px 1px #2020233'>Mobile App</Heading>

                <SimpleGrid columns={[ 1,1,2 ]} gap={6}>
                    <Section>
                        <WorkGridItem id="isihape" title="Isihape" thumbnail={thumbIsihape}>
                            An app for Medical Institution such as Hospital to manage their data. Including Admin, Doctors, Labs, and Patients.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>

                <Heading as="h2" fontSize={20} mb={5} textAlign="center" color="teal" textShadow='1px 1px #2020233'>Game</Heading>

                <SimpleGrid columns={[ 1,1,2 ]} gap={6}>
                    <Section>
                        <WorkGridItem id="idm" title="Immunity Defense Manager" thumbnail={thumbIDM}>
                            Defend human immune system through this fun tower defense minigame.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works