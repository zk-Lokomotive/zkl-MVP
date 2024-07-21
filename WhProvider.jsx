import { useState } from 'react';
import {
  IUnsignedTx,
  WhProvider,
  WhTransferModal,
} from '@zktx.io/wormhole-kit';

const App = () => {
  const [address, setAddress] = useState<string | undefined>(undefined);
  const [open, setOpen] = useState<boolean>(false);

  const handleUnsignedTxs = async (unsignedTxs: IUnsignedTx[]): Promise<void> => {
    // To execute transactions,
    // send the unsigned transaction to the wallet.
  };

  return (
    <WhProvider
      network= "Testnet"
  chains = { ['Sui', 'Sepolia', 'Solana', 'Aptos', 'Celo', 'Polygon']}
  config = {
        {
    chains: {
      Ethereum: {
        rpc: 'https://eth-goerli.public.blastapi.io',
            },
      Polygon: {
        rpc: 'https://polygon-mumbai.api.onfinality.io/public',
            },
    },
  }
}
mode = "dark"
  >
  <WhTransferModal
        chain="Sui"
address = { address }
trigger = {< button > Transfer </button>}
handleUnsignedTxs = { handleUnsignedTxs }
  />
  </ WhProvider>
  )
}
