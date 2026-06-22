export function calculateReputationScore(
jobs:number,
ratings:number,
deals:number
){

return (
jobs * 0.3 +
ratings * 0.4 +
deals * 0.3
);

}
