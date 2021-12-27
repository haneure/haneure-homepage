import { Container, Badge, SimpleGrid, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Lerenle">
            <Container>
                <Title>
                    Lerenle <Badge>2021</Badge>
                </Title>
                <P>
                    Lerenle offers you a hotel booking app with beautiful design to showcase hotels and its room. You can book for stay easily with this app.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://lerenle.000webhostapp.com/">
                        https://lerenle.000webhostapp.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP, HTML, JS, CSS, MySQL, CodeIgniter</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/lerenle_eyecatch.png" alt="Renebae" />
                <WorkImage src="/images/works/lerenle_01.png" alt="Renebae" />
                <WorkImage src="/images/works/lerenle_02.png" alt="Renebae" />
                <WorkImage src="/images/works/lerenle_05.png" alt="Renebae" />
                <WorkImage src="/images/works/lerenle_04.png" alt="Renebae" />
                <WorkImage src="/images/works/lerenle_03.png" alt="Renebae" />
            </Container>
        </Layout>
    )
}

export default Work