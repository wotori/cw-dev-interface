import { useEffect } from "react";
import { useSigningClient } from "./wallets/keplr";

export default function App() {
  const { signingClient, client, connectWallet } = useSigningClient();

  const handleLoginCosmos = async () => {
    try {
      console.log("connecting to cosmos...", connectWallet);
      await connectWallet();
    } catch (error) {
      console.error("Failed to connect to Cosmos:", error);
    }
  };

  useEffect(() => {
    if (connectWallet) {
      handleLoginCosmos();
    } else {
      console.log("not connected");
    }
  }, [signingClient, client]);

  return <h1>Hello, world!</h1>;
}
