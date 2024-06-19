const IDENTITY_CONTRACT = process.env.IDENTITY_CONTRACT;

export async function saveToArchway(client, address) {
  const identityData = {
    about: "test",
    address: address,
    avatar: "test",
    name: "test",
    pic: "test",
  };

  console.log("identity data: ", identityData);

  try {
    let resp = await client.execute(
      address,
      IDENTITY_CONTRACT,
      {
        update_metadata: { identity_data: identityData },
      },
      "auto"
    );
    alert("Profile updated successfully", resp);
  } catch (error) {
    console.error("Error updating profile:", error);
    alert("Failed to update profile");
  }
}
