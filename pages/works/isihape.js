import { Container, Badge, SimpleGrid, Link, List, ListItem, Icon } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import {
    IoLogoGooglePlaystore
} from 'react-icons/io5'

const Work = () => {
    return (
        <Layout title="Renebae">
            <Container>
                <Title>
                    ISIHAPE <Badge>2021</Badge>
                </Title>
                <P>
                    Manage your Admin, Doctors, Labs, and Patients data with ease!. We have CRUD features for admin, and also live queue features patients. And for Doctors, you can register yourself as a doctor user and you can manage your own appointment schedule!
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>GIT</Meta>
                        <Link href="https://github.com/haneure/isihape">
                            https://github.com/haneure/isihape <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Java, Firebase</span>
                    </ListItem>
                    <ListItem>
                        <Meta><Icon as={IoLogoGooglePlaystore} mr={2}/>Link</Meta>
                        <Link href="https://play.google.com/store/apps/details?id=id.ac.umn.isihape">
                            Come and see my app on Playstore! <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/isihape_eyecatch.png" alt="Isihape" />
                <SimpleGrid columns={2} gap={2}>
                    <WorkImage src="/images/works/isihape_01.png" alt="Isihape" />
                    <WorkImage src="/images/works/isihape_02.png" alt="Isihape" />
                    <WorkImage src="/images/works/isihape_03.png" alt="Isihape" />
                    <WorkImage src="/images/works/isihape_04.png" alt="Isihape" />
                    <WorkImage src="/images/works/isihape_05.png" alt="Isihape" />
                    <WorkImage src="/images/works/isihape_06.png" alt="Isihape" />
                    <WorkImage src="/images/works/isihape_07.png" alt="Isihape" />
                    <WorkImage src="/images/works/isihape_08.png" alt="Isihape" />
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Work