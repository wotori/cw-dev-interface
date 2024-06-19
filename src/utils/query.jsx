async function queryUser() {
  try {
    let reponse = await signingClient.queryContractSmart(
      IDENTITY_CONTRACT,
      {
        user_info: {
          address: walletAddress,
        },
      },
      "auto"
    );
    console.log("user data loaded", reponse);
    alert("Profile successfully loaded");
  } catch (error) {
    console.error("Error loading the profile:", error);
  }
}
