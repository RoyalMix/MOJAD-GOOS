export class ChatService {

sendMessage(
senderId:string,
receiverId:string,
content:string
){

return {

id:Date.now().toString(),

senderId,

receiverId,

content,

status:"sent"

};

}

}
