import { ArchwayClient, SigningArchwayClient } from "@archwayhq/arch3.js";
import { ChainInfo } from "@keplr-wallet/types";

type ConnectWalletFunction = () => Promise<void>;
type DisconnectFunction = () => void;

export interface ISigningCosmWasmClientContext {
  walletAddress: string;
  client: ArchwayClient | null;
  signingClient: SigningArchwayClient | null;
  loading: boolean;
  error: null;
  connectWallet: ConnectWalletFunction | null;
  disconnect: DisconnectFunction | null;
  networkConfig: ChainInfo | null;
}
