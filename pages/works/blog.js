import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Blog">
            <Container>
                <Title>
                    Blog <Badge>Ongoing</Badge>
                </Title>
                <P>
                    Blog app for users to post their intereset in stuff.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://ancient-beach-88561.herokuapp.com/posts">
                        https://ancient-beach-88561.herokuapp.com/posts <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel, Bootstrap, MySQL</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/blog_eyecatch.png" alt="Blog" />
                <WorkImage src="/images/works/blog_01.png" alt="Blog" />
                <WorkImage src="/images/works/blog_02.png" alt="Blog" />
            </Container>
        </Layout>
    )
}

export default Work