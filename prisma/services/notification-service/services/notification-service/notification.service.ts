export class NotificationService {

createNotification(userId:string,type:string,message:string){

return {
success:true,
userId,
type,
message
};

}

}
