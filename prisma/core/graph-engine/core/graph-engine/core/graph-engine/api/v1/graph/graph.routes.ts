import express from "express";

const router = express.Router();

router.get("/connections/:id",(req,res)=>{

res.json({
success:true,
connections:[]
});

});

export default router;
