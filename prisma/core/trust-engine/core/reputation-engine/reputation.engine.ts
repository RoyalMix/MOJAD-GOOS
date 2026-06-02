export class ReputationEngine {

calculateReputation(user:any){

let score = 0;

score += user.completedJobs || 0;

score += user.successfulDeals || 0;

score += user.completedCourses || 0;

return score;

}

}
