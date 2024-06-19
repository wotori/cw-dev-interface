import { useState } from "react";
import { SigningArchwayClient, ArchwayClient } from "@archwayhq/arch3.js";
import { connectKeplr } from "./keplr";
import { ISigningCosmWasmClientContext } from "./models";
import { ChainInfo, Window as KeplrWindow } from "@keplr-wallet/types";

declare let window: KeplrWindow;

export const useSigningCosmWasmClient = (
  networkConfig: ChainInfo
): ISigningCosmWasmClientContext => {
  const [client, setClient] = useState<ArchwayClient | null>(null);
  const [signingClient, setSigningClient] =
    useState<SigningArchwayClient | null>(null);
  const [walletAddress, setWalletAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);

  const connectWallet = async () => {
    setLoading(true);

    if (window.keplr) {
      try {
        setCounter(counter + 1);
        connectKeplr(counter + 1, networkConfig);

        // enable website to access keplr
        await window.keplr.enable(networkConfig.chainId);

        // get offline signer for signing txs
        const offlineSigner = await window.keplr.getOfflineSigner(
          networkConfig.chainId
        );

        setSigningClient(
          await SigningArchwayClient.connectWithSigner(
            networkConfig.rpc, // TODO: take from config chain.info.js
            offlineSigner
          )
        );

        // get user address
        const [{ address }] = await offlineSigner.getAccounts();
        setWalletAddress(address);

        setLoading(false);
      } catch (error: unknown) {
        console.log("Got error", error);
        setError(null); // TODO: pass real error
      }
    }
    try {
      setClient(await ArchwayClient.connect(networkConfig.rpc));
    } catch (error: unknown) {
      alert(`Unable connect to: ${networkConfig.rpc}`);
    }
  };

  const disconnect = () => {
    if (signingClient) {
      signingClient.disconnect();
    }
    if (client) {
      setClient(null);
    }
    setWalletAddress("");
    setSigningClient(null);
    setLoading(false);
  };

  return {
    walletAddress,
    signingClient,
    loading,
    error,
    connectWallet,
    disconnect,
    client,
    networkConfig,
  };
};
