export async function piLogin() {
  const user = await Pi.authenticate(["username", "wallet_address"]);

  return {
    userId: user.uid,
    username: user.username,
    wallet: user.wallet_address,
  };
}
