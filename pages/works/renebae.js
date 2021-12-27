import { Container, Badge, SimpleGrid, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Renebae">
            <Container>
                <Title>
                    Renebae <Badge>2021</Badge>
                </Title>
                <P>
                    Multi-cross-platform e-commerce app created with Ionic using ReactJS and Firebase as backend. Sell, browse and compare your dream VGA!
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://renebae.vercel.app/">
                            https://renebae.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Ionic, React Native</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Links</Meta>
                        <Link href="https://play.google.com/store/apps/details?id=com.lbj.ionic.renebae">
                            Come and see my app on Playstore! <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/renebae_01.png" alt="Renebae" />
                <SimpleGrid columns={2} gap={2}>
                    <WorkImage src="/images/works/renebae_02.png" alt="Renebae" />
                    <WorkImage src="/images/works/renebae_03.png" alt="Renebae" />
                    <WorkImage src="/images/works/renebae_04.png" alt="Renebae" />
                    <WorkImage src="/images/works/renebae_05.png" alt="Renebae" />
                    <WorkImage src="/images/works/renebae_06.png" alt="Renebae" />
                    <SimpleGrid>
                    <WorkImage src="/images/works/renebae_07.png" alt="Renebae" />
                    <WorkImage src="/images/works/renebae_08.png" alt="Renebae" />
                    <WorkImage src="/images/works/renebae_09.png" alt="Renebae" />
                    </SimpleGrid>
                </SimpleGrid>

            </Container>
        </Layout>
    )
}

export default Work