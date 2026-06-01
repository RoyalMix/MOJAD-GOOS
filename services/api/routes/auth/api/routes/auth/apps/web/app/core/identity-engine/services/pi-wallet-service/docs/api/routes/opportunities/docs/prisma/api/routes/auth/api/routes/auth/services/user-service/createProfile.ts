export async function createProfile(userId: string) {
  return {
    userId,
    reputation: 0,
    trustScore: 0,
  };
}
