export class EventEngine {

trigger(event:string,data:any){

return {
event,
status:"triggered",
data
};

}

}
