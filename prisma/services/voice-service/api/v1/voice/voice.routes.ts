import express from "express";

const router = express.Router();

router.post("/start",(req,res)=>{

res.json({
status:"call started"
})

})

export default router;
