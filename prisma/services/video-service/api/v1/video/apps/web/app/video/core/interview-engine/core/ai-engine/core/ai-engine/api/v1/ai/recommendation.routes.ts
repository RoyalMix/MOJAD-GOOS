import express from "express";

const router = express.Router();

router.get("/jobs",(req,res)=>{

res.json({
recommendations:[]
});

});

export default router;
