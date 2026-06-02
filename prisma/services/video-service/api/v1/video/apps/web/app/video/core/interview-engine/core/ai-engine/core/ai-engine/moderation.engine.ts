export class ModerationEngine {

scanMessage(content:string){

return {
safe:true,
riskLevel:"low"
};

}

scanJob(job:any){

return {
safe:true
};

}

scanBusiness(business:any){

return {
safe:true
};

}

scanInvestor(investor:any){

return {
safe:true
};

}

}
