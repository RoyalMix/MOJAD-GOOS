export class EventConsumer {

consume(event:any){

console.log("Processing:",event.type);

return true;

}

}
