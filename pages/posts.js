import {Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbIDM from '../public/images/works/idm_eyecatch.png'

const Posts = () => (
    <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Popular Posts
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1,2,2]} gap={6}>
                    <GridItem
                    title="Immunity Defense Manager"
                    thumbnail={thumbIDM}
                    href="https://drive.google.com/file/d/1cjikWBLUDtXhFv61LpRtaYZDV1ryyydZ/view?usp=sharing"
                    />
                </SimpleGrid>
            </Section>

        </Container>
    </Layout>
)

export default Posts