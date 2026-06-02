import express from "express";

const router = express.Router();

router.post("/scan",(req,res)=>{

res.json({
safe:true
});

});

export default router;
