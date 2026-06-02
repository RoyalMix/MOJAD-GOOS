import jwt from "jsonwebtoken";

export class JWTService {

generateToken(userId:string){

return jwt.sign(
{ userId },
process.env.JWT_SECRET || "secret",
{ expiresIn:"7d" }
);

}

}
