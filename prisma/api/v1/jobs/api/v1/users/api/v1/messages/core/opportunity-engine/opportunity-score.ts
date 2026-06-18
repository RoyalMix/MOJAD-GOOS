export function calculateOpportunityScore(
  trust:number,
  reputation:number,
  activity:number
){

return (
trust * 0.4 +
reputation * 0.4 +
activity * 0.2
);

}
