export class TrustEngine {

calculateTrust(user:any){

return {
score:50,
level:"new"
};

}

increaseTrust(userId:string,value:number){

return {
updated:true
};

}

decreaseTrust(userId:string,value:number){

return {
updated:true
};

}

}
