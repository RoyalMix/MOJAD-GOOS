export interface MojadEvent {

id:string;

type:string;

payload:any;

timestamp:Date;

}

export class EventStreamEngine {

publish(event:MojadEvent){

return {
status:"published",
event
};

}

subscribe(topic:string){

return {
status:"subscribed",
topic
};

}

}
