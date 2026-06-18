import express from "express";

const router = express.Router();

router.post("/", async (req,res)=>{

res.json({
success:true,
message:"Application submitted"
});

});

export default router;
