export class ReputationEngine {

calculate(user:any){

return {
rating:0,
successRate:0
};

}

addReview(userId:string,score:number){

return {
updated:true
};

}

}
