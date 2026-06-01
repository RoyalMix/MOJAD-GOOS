export function generateMojadID(username: string) {
  const random = Math.floor(100000 + Math.random() * 900000);

  return `MOJAD-${username.toUpperCase()}-${random}`;
}
