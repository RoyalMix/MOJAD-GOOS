import express from "express";

const router = express.Router();

router.post("/", async(req,res)=>{

res.json({
message:"login success"
});

});

export default router;
