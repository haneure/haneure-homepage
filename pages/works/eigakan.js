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
                    Eigakan <Badge>2022</Badge>
                </Title>
                <P>
                    A web app using TMDB API to show movie database from The Movie Database.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://eigakan.herokuapp.com/">
                        https://eigakan.herokuapp.com/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Laravel, Tailwind</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Libraries</Meta>
                        <span><Link href="https://github.com/spatie/laravel-view-models">view-model</Link>, <Link href="https://laravel-livewire.com/">livewire</Link></span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/eigakan_03.png" alt="Eigakan" />
                <WorkImage src="/images/works/eigakan_01.png" alt="Eigakan" />
                <WorkImage src="/images/works/eigakan_02.png" alt="Eigakan" />
                <WorkImage src="/images/works/eigakan_04.png" alt="Eigakan" />
                <WorkImage src="/images/works/eigakan_05.png" alt="Eigakan" />
            </Container>
        </Layout>
    )
}

export default Work