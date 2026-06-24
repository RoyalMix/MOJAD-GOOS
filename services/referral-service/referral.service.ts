export class ReferralService {

  generateReferralLink(username:string){
    return `https://mojad.global/ref/${username}`;
  }

  calculateReward(){
    return 0;
  }

}
