import express from "express";

const router = express.Router();

router.post("/create",(req,res)=>{

res.json({

status:"meeting created"

})

})

export default router;
