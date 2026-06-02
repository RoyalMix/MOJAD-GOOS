export class MojadIDService {

generate(userId:string){

return {
mojadId:"MOJAD-"+Date.now(),
userId
};

}

}
