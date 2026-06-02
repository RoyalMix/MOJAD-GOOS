export class ReferralService {

  generateCode(userId: string) {
    return {
      userId,
      code: "MOJAD-" + Date.now()
    };
  }

  rewardReferral(referrerId: string, amount: number) {
    return {
      referrerId,
      amount,
      currency: "PI",
      status: "rewarded"
    };
  }

}
