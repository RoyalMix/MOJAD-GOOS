export class SocketService {

connect(){

return {
status:"connected"
};

}

emit(event:string,data:any){

return {
event,
data
};

}

}
