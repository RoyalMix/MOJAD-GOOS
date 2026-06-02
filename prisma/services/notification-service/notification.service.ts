export class NotificationService {

send(userId:string,title:string,message:string){

return {
userId,
title,
message,
sent:true
};

}

}
