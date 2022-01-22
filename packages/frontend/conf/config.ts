import { ChainId, Config } from '@usedapp/core';
import { GreeterContractAddress as RinkebyGreeterContractAddress } from '../artifacts/contracts/addresses/rinkebyContractAddress';

const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID;

export const devChains: ChainId[] = [ChainId.Localhost];

export const allowedChains: ChainId[] = [ChainId.Rinkeby].filter((chaindId) => {
  if (process.env.NODE_ENV === 'production') {
    return !devChains.includes(chaindId);
  }
  return chaindId;
});

export const getDappConfig = (): Config => ({
  readOnlyUrls: {
    [ChainId.Rinkeby]: `https://ropsten.infura.io/v3/${INFURA_ID}`,
    [ChainId.Hardhat]: 'http://localhost:8545',
  },
  supportedChains: [ChainId.Rinkeby, ChainId.Hardhat],
});

const contractConfig: Record<number, { greeter?: string }> = {
  [ChainId.Rinkeby]: {
    greeter: RinkebyGreeterContractAddress,
  },
};

export default contractConfig;
