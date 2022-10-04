export type AddressType = {
  97: string;
  56: string;
};

export enum CHAIN_ID {
  TESTNET = 97,
  MAINNET = 56,
}

export default function getChainIdFromEnv(): number {
  const env = process.env.NEXT_PUBLIC_CHAIN_ID;
  if (!env) {
    return 97;
  }
  return parseInt(env);
}

export const getRPC = () => {
  if (getChainIdFromEnv() === CHAIN_ID.MAINNET)
    return process.env.NEXT_PUBLIC_RPC_MAINNET;
  return process.env.NEXT_PUBLIC_RPC_TESTNET;
};
export const SMART_ADDRESS = {
  CROWD_SALE: { 97: "0x61734A8dc649a7485aF7016cbEBD6DDBd03256e5", 56: "" },
  USDT: { 97: "0x89524537A524eB3EadD537E8A7D9c73735e9fA55", 56: "" },
  NFT: { 97: "0xaB343c01BB5695feD7dd78E5E0cE6190EBc16C19", 56: "" },
  MARKET: { 97: "0xE3397e6c997DA58A47abB7bDB76Fe2812723Ac4f", 56: "" },
  AUCTION: { 97: "0x81bD66EBA9f45D0f8D5B28dD991704c4763A443a", 56: "" },
  IPT: { 97: "0x83c3d3ef65f453aec2891522941380a7d1430244", 56: "" },
};
