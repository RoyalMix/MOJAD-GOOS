export async function sendPiPayment(from, to, amount) {
  return {
    status: "success",
    from,
    to,
    amount,
    currency: "π",
  };
}
