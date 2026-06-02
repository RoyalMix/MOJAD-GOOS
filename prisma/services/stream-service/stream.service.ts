export class StreamService {

createStream(title:string){

return {
id:Date.now().toString(),
title
};

}

rewardOutcome(outcomes:number){

return outcomes * 0.5;

}

}
