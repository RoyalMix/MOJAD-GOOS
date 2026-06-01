export const createWallet = (userId: string) => {
  return {
    userId,
    balance: 0,
    currency: "PI",
  };
};

export const addBalance = (wallet, amount: number) => {
  wallet.balance += amount;
  return wallet;
};
