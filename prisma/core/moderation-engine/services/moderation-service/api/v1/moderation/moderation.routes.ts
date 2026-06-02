import express from "express";

const router = express.Router();

router.post("/check",(req,res)=>{

res.json({
status:"safe",
riskScore:0.1
});

});

export default router;
