import { useEffect, useState, useRef } from "react";
import { useSigningClient } from "./wallets/keplr";
import { queryUser, queryAllUsers } from "./utils/query";
import { saveToArchway } from "./utils/execute";

export default function App() {
  const { signingClient, client, connectWallet, walletAddress } =
    useSigningClient();
  const [isConnected, setIsConnected] = useState(false);
  const hasAttemptedConnection = useRef(false);

  const handleLoginKeplr = async () => {
    try {
      console.log("connecting to keplr...", connectWallet);
      await connectWallet();
      if (client) {
        setIsConnected(true);
        console.log("keplr connected");
      }
    } catch (error) {
      console.error("Failed to connect to Cosmos:", error);
    }
  };

  useEffect(() => {
    if (!isConnected && !hasAttemptedConnection.current) {
      hasAttemptedConnection.current = true;
      handleLoginKeplr();
    } else {
      console.log("else: ", client);
    }
  }, [client, signingClient, isConnected]);

  return (
    <>
      <button
        onClick={() => {
          queryUser(signingClient, walletAddress);
        }}
      >
        query one
      </button>

      <button
        onClick={() => {
          queryAllUsers(signingClient, walletAddress);
        }}
      >
        query all
      </button>

      <button
        onClick={() => {
          saveToArchway(signingClient, walletAddress);
        }}
      >
        execute
      </button>
    </>
  );
}
