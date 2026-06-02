export class SafetyEngine {

analyze(content:any){

return {
riskScore: 0.2,
status: "allowed"
};

}

detectScam(content:any){

return {
scam: false
};

}

detectSpam(content:any){

return {
spam: false
};

}

}
