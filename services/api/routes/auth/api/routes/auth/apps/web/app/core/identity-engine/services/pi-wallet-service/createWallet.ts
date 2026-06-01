export function createWallet(userId: string) {
  return {
    userId,
    piBalance: 0,
    lockedPi: 0,
    totalEarnedPi: 0,
  };
}
