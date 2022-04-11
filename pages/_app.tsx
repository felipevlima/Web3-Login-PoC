import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '@rainbow-me/rainbowkit/styles.css'
import {
  RainbowKitProvider,
  Chain,
  getDefaultWallets,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit'
import { WagmiProvider, chain } from 'wagmi'
import { providers } from 'ethers'

const infuraId = process.env.NEXT_PUBLIC_INFURAID

const provider = ({ chainId }: { chainId?: number }) => new providers.InfuraProvider(chainId, infuraId)

const chains: Chain[] = [
  { ...chain.mainnet, name: 'Ethereum' },
  { ...chain.ropsten, name: 'Ropsten'},
  { ...chain.localhost, name: 'Localhost' }
  // { ...chain.polygonMainnet, name: 'Polygon' },
  // { ...chain.optimism, name: 'Optimism' },
  // { ...chain.arbitrumOne, name: 'Arbitrum' }
]

const wallets = getDefaultWallets({
  chains,
  infuraId,
  appName: 'TesteDApp',
  jsonRpcUrl: ({ chainId }) => chains.find(x => x.id === chainId)?.rpcUrls?.[0] ?? chain.mainnet.rpcUrls[0]
})

const connectors = connectorsForWallets(wallets)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RainbowKitProvider chains={chains}>
      <WagmiProvider autoConnect connectors={connectors} provider={provider}>
        <Component {...pageProps} />
      </WagmiProvider>
    </RainbowKitProvider>
  )
}

export default MyApp
