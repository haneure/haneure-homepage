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
                    Immunity Defense Manager <Badge>2021</Badge>
                </Title>
                <P>
                    Defend human immune system from these malicious viruses through this fun tower defense minigame.
                </P>
                <WorkImage src="/images/works/idm_03.png" alt="Renebae" />
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Download here</Meta>
                        <Link href="https://drive.google.com/file/d/1cjikWBLUDtXhFv61LpRtaYZDV1ryyydZ/view?usp=sharing">
                        https://drive.google.com/file/d/1cjikWBLUDtXhFv61LpRtaYZDV1ryyydZ/view?usp=sharing<ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>C#, Unity</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/idm_01.png" alt="Renebae" />
                <WorkImage src="/images/works/idm_02.png" alt="Renebae" />
            </Container>
        </Layout>
    )
}

export default Work