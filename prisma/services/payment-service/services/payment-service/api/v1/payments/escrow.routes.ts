import express from "express";

const router = express.Router();

router.post("/create",(req,res)=>{

res.json({
status:"escrow created"
});

});

router.post("/release",(req,res)=>{

res.json({
status:"escrow released"
});

});

export default router;
