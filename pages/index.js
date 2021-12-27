import NextLink from 'next/link'
import { Container, Box, Heading, Image, useColorModeValue, Link, List, ListItem, Button, SimpleGrid, Icon } from "@chakra-ui/react";
import Section from '../components/section'
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import { BioSection, BioYear } from '../components/bio';
import { GridItem } from '../components/grid-item'
import {
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from 'react-icons/io5'

import thumbYoutube from '../public/images/links/youtube_eyecatch.png'

const Page = () => {
    return(
        <Layout>
            <Container>
                <Box borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                p={3}
                mb={6}
                align="center">
                    Hello, I&apos;m a full-stack developer based in Indonesia!
                </Box>
                <Box display={{ md:'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Christian Richard Halim
                        </Heading>
                        <p>Digital Craftzman ( Artist / Engineer / Developer )</p>
                    </Box>
                    <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                    >
                    <Image borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/chris.jpg"
                    alt="Profile Image"
                    />
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>Chris is a 3rd year computer science student and a full-stack developer based in Indonesia with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves to play games, watch animes and hanging out with his camera.
                    {/* <NextLink href="/works"><Link>Works</Link></NextLink>. */}
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                                MyPortofolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2000</BioYear>
                        Born in Bengkulu, Indonesia.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019 to present</BioYear>
                        6th Semester as a Computer Science student at Multimedia Nusantara University.
                    </BioSection>
                </Section>
                <Section delay={0.3}>
                    <Heading>
                        I ♥
                    </Heading>
                    <Paragraph>
                        Art, Music,{' '}
                        <Link href="#">
                            Drawing
                        </Link>
                        , Photography, Anime, Games, Machine Learning
                    </Paragraph>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/haneure" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as = {IoLogoGithub}/>}>
                                    @haneure
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://twitter.com/richrias" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as = {IoLogoTwitter}/>}>
                                    @richrias
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.instagram.com/chri1stal/" target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as = {IoLogoInstagram}/>}>
                                    @chri1stal
                                </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link target="_blank">
                                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as = {IoLogoDiscord}/>}>
                                    Discord
                                </Button>
                            </Link>
                        </ListItem>
                    </List>

                    <SimpleGrid columns={[1,2,2]} gap={6}>
                        <GridItem href="https://www.youtube.com/channel/UCatpnFjN8n5lbAQbFWnpOJA" title="黒輝くリス (Kuroki Kurisu)" thumbnail={thumbYoutube}>
                            My Youtube Channel
                        </GridItem>
                    </SimpleGrid>

                </Section>

            </Container>
        </Layout>
    )
}

export default Page;

