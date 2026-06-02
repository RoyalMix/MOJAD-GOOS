export class MojadIDEngine {

generateID(name:string){

return "MOJAD-" + Math.random().toString(36).substring(2,10).toUpperCase();

}

}
