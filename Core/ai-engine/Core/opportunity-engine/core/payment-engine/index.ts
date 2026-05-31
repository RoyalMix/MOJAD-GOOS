export function processPayment(from: string, to: string, amount: number) {
  return {
    status: "pending",
    currency: "π",
    from,
    to,
    amount
  };
}
