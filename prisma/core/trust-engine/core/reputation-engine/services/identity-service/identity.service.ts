export class IdentityService {

createMojadID(userId:string){

return {
id:"MID-"+Date.now(),
userId
};

}

}
