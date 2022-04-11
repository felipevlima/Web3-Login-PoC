import type { NextPage } from 'next'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Container, H1 } from '../components/Home.styled'

const Home: NextPage = () => {
  return (
    <Container>
      <H1>Wallet Test</H1>
      <ConnectButton />
    </Container>
  )
}

export default Home