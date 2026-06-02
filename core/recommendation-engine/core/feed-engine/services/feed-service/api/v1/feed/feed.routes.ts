import express from "express";

const router = express.Router();

router.get("/:userId",(req,res)=>{

res.json({
success:true,
feed:[]
});

});

export default router;
