export class DataCollector {

logUserActivity(userId:string,action:string){

return {
stored:true,
userId,
action
};

}

storeAITrainingData(input:any,output:any){

return {
saved:true
};

}

}
