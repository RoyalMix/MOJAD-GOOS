import express from "express";

const router = express.Router();

router.post("/send",(req,res)=>{

res.json({

status:"message sent"

});

});

export default router;
