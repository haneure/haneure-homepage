import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Rentol">
            <Container>
                <Title>
                    Rentol <Badge>2021</Badge>
                </Title>
                <P>
                    An app that used for users who owns consoles to showcase their console to rent out or for users who want to rent consoles.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://rental-uas-if430-rentol.000webhostapp.com/">
                        https://rental-uas-if430-rentol.000webhostapp.com/ <ExternalLinkIcon mx="2px" />
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
                <WorkImage src="/images/works/rentol_eyecatch.png" alt="Rentol" />
                <WorkImage src="/images/works/rentol_01.png" alt="Rentol" />
                <WorkImage src="/images/works/rentol_02.png" alt="Rentol" />
                <WorkImage src="/images/works/rentol_05.png" alt="Rentol" />
                <WorkImage src="/images/works/rentol_04.png" alt="Rentol" />
                <WorkImage src="/images/works/rentol_03.png" alt="Rentol" />
            </Container>
        </Layout>
    )
}

export default Work