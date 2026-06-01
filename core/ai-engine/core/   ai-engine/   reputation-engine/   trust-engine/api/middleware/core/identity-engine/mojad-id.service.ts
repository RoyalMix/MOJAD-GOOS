export const createMojadID = (userId: string) => {
  return {
    username: `mojad_${userId.slice(0, 8)}`,
    reputation: 0,
    trustScore: 0,
  };
};
