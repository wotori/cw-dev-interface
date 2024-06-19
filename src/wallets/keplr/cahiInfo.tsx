// https://docs.keplr.app/api/suggest-chain.html
import { ChainInfo } from "@keplr-wallet/types";

// TODO: configure .env or smth similar
const CHAIN_ID = process.env.CHAIN_ID || "constantine-3";
const CHAIN_NAME = process.env.CHAIN_NAME || "constantine";
const RPC =
  process.env.CHAIN_RPC_ENDPOINT || "https://rpc.constantine.archway.tech:443";
const REST =
  process.env.CHAIN_RPC_ENDPOINT || "https://api.constantine.archway.tech";
const BECH32 = process.env.CHAIN_BECH32_PREFIX || "archway";
const DENOM = process.env.DENOM || "aconst";
const DENOM_MIN = process.env.DENOM || "aconst";
const DECIMALS = process.env.DECIMALS || 18;

console.log("all network vars: ", {
  CHAIN_ID,
  CHAIN_NAME,
  RPC,
  REST,
  BECH32,
  DENOM,
  DENOM_MIN,
});

const chainInfo: ChainInfo = {
  chainId: CHAIN_ID,
  chainName: CHAIN_NAME,
  rpc: RPC,
  rest: REST,
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: BECH32,
    bech32PrefixAccPub: BECH32 + "pub",
    bech32PrefixValAddr: BECH32 + "valoper",
    bech32PrefixValPub: BECH32 + "valoperpub",
    bech32PrefixConsAddr: BECH32 + "valcons",
    bech32PrefixConsPub: BECH32 + "valconspub",
  },
  currencies: [
    {
      coinDenom: DENOM,
      coinMinimalDenom: DENOM_MIN,
      coinDecimals: Number(DECIMALS),
      coinGeckoId: "undefined",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: DENOM,
      coinMinimalDenom: DENOM_MIN,
      coinDecimals: Number(DECIMALS),
      coinGeckoId: "undefined",
      gasPriceStep: {
        low: 0.01,
        average: 0.025,
        high: 0.04,
      },
    },
  ],
  stakeCurrency: {
    coinDenom: DENOM,
    coinMinimalDenom: DENOM_MIN,
    coinDecimals: Number(DECIMALS),
    coinGeckoId: "undefined",
  },
};

export default chainInfo;
