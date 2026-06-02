export class TrustEngine {

calculateTrust(user:any){

let score = 50;

if(user.verified) score += 20;

if(user.completedJobs > 10) score += 15;

if(user.referrals > 5) score += 10;

return score;

}

}
