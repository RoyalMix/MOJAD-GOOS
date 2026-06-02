import express from "express";

const router = express.Router();

router.get("/jobs",(req,res)=>{

res.json({
ai:"job matching active"
});

});

export default router;
