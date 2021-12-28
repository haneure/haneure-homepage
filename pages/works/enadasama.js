import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Enadasama">
            <Container>
                <Title>
                    Enadasama <Badge>2020</Badge>
                </Title>
                <P>
                    Enadasama is a web app that offers food ordering services. You can promote your restaurant and its menu with this app.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="http://enadasama.000webhostapp.com/">
                        http://enadasama.000webhostapp.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP, HTML, JS, CSS, MySQL</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/enadasama_eyecatch.png" alt="Enadasama" />
                <WorkImage src="/images/works/enadasama_01.png" alt="Enadasama" />
                <WorkImage src="/images/works/enadasama_02.png" alt="Enadasama" />
                <WorkImage src="/images/works/enadasama_03.png" alt="Enadasama" />
                <WorkImage src="/images/works/enadasama_04.png" alt="Enadasama" />
            </Container>
        </Layout>
    )
}

export default Work