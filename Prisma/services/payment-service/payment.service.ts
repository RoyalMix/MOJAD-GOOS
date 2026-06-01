export class PaymentService {

  sendPayment(fromUserId: string, toUserId: string, amount: number) {
    return {
      id: Date.now().toString(),
      fromUserId,
      toUserId,
      amount,
      currency: "PI",
      status: "completed",
      type: "payment"
    };
  }

  createEscrow(senderId: string, receiverId: string, amount: number, jobId?: string) {
    return {
      id: Date.now().toString(),
      senderId,
      receiverId,
      jobId,
      amount,
      currency: "PI",
      status: "held"
    };
  }

  releaseEscrow(escrowId: string) {
    return {
      escrowId,
      status: "released"
    };
  }
}
