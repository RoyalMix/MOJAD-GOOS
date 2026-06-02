export class EscrowService {

createEscrow(senderId:string,receiverId:string,amount:number){

return {
status:"held",
amount
};

}

releaseEscrow(escrowId:string){

return {
status:"released"
};

}

}
