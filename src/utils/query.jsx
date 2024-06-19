const IDENTITY_CONTRACT = process.env.IDENTITY_CONTRACT;
console.log("IDENTITY_CONTRACT: ", IDENTITY_CONTRACT);

export async function queryUser(client, address) {
  try {
    let reponse = await client.queryContractSmart(
      IDENTITY_CONTRACT,
      {
        user_info: {
          address: address,
        },
      },
      "auto"
    );
    console.log("user data loaded", reponse);
    alert("Profile successfully loaded, check logs.");
  } catch (error) {
    console.error("Error loading the profile:", error);
  }
}

export async function queryAllUsers(client, address) {
  try {
    let reponse = await client.queryContractSmart(
      IDENTITY_CONTRACT,
      {
        user_info_all: {},
      },
      "auto"
    );
    console.log("user data loaded", reponse);
    alert("Profile successfully loaded, check logs.");
  } catch (error) {
    console.error("Error loading the profile:", error);
  }
}
