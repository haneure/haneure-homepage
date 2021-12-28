import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Foody-Foodyay">
            <Container>
                <Title>
                    Foody-Foodyay <Badge>2020</Badge>
                </Title>
                <P>
                    Foody-Foodyay is a web app that uses Edamam API to check for cooking recipe and ingredients nutrition. Users can use this to find recipes from all around the world, and input ingredients to find out its nutrition facts.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://foody-foodyey.vercel.app/">
                        https://foody-foodyey.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP, HTML, JS, CSS</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/foodyfoodyay_eyecatch.png" alt="Foody-Foodyay" />
                <WorkImage src="/images/works/foodyfoodyay_01.png" alt="Foody-Foodyay" />
                <WorkImage src="/images/works/foodyfoodyay_02.png" alt="Foody-Foodyay" />
            </Container>
        </Layout>
    )
}

export default Work