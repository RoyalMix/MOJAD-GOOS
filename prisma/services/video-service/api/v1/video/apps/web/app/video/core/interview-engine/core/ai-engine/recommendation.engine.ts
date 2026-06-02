export class RecommendationEngine {

recommendJobs(user:any){

return {
type:"jobs",
recommendations:[]
};

}

recommendBusinesses(user:any){

return {
type:"businesses",
recommendations:[]
};

}

recommendInvestors(startup:any){

return {
type:"investors",
recommendations:[]
};

}

recommendCourses(user:any){

return {
type:"courses",
recommendations:[]
};

}

}
