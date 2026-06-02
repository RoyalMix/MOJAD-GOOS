export class RankingEngine {

rank(items:any[]){

return items.sort((a,b)=>b.score - a.score);

}

}
