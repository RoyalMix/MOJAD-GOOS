import express from "express";

const router = express.Router();

router.get("/",(req,res)=>{

res.json({
results:[]
});

});

export default router;
