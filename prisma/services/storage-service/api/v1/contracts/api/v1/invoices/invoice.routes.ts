import express from "express";

const router = express.Router();

router.post("/send",(req,res)=>{

res.json({
status:"invoice sent"
})

})

export default router;
