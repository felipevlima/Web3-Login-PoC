import type { NextPage } from 'next'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { styled } from '@stitches/react'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '8px 16px',
  border: '1px solid #eee'
})

const H1 = styled('h1', {
  fontSize: '24px',
})

const Home: NextPage = () => {
  return (
    <Container>
      <H1>Wallet Test</H1>
      <ConnectButton />
    </Container>
  )
}

export default Home