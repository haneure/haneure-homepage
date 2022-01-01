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
                    Crypto <Badge>2022</Badge>
                </Title>
                <P>
                    Solidity, Smart Contracts, Cryptocurrencies transaction using Ropsten Testnet. Using MetaMask, you can simulate transactions using ETH anywhere, anytime from all over the world!
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://crypto-dist.vercel.app/">
                        https://crypto-dist.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Tailwind CSS, Solidity, Hardhat</span>
                    </ListItem>

                </List>
                <WorkImage src="/images/works/crypto_01.png" alt="Crypto" />
                <SimpleGrid columns={2} gap={2}>
                    <WorkImage src="/images/works/crypto_11.png" alt="Crypto" />
                    <WorkImage src="/images/works/crypto_12.png" alt="Crypto" />
                    <WorkImage src="/images/works/crypto_13.png" alt="Crypto" />
                    <WorkImage src="/images/works/crypto_14.png" alt="crypto" />
                </SimpleGrid>
                <WorkImage src="/images/works/crypto_10.png" alt="Crypto"></WorkImage>
                <WorkImage src="/images/works/crypto_08.png" alt="Crypto"></WorkImage>
                <WorkImage src="/images/works/crypto_09.png" alt="Crypto"></WorkImage>

            </Container>
        </Layout>
    )
}

export default Work