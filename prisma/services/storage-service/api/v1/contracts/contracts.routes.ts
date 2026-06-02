import express from "express";

const router = express.Router();

router.post("/send",(req,res)=>{

res.json({
status:"contract sent"
})

})

export default router;
