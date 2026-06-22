export function calculateTrustScore(
verification:number,
activity:number,
payments:number
){

return (
verification * 0.4 +
activity * 0.3 +
payments * 0.3
);

}
