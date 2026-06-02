type Event = {
type: string;
payload: any;
};

export class EventBus {

emit(event: Event){

return {
status:"event_received",
event
};

}

subscribe(type:string,handler:Function){

return {
status:"subscribed",
type
};

}

}
