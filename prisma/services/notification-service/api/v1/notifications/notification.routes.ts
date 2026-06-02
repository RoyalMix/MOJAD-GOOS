import express from "express";

const router = express.Router();

router.get("/:userId",(req,res)=>{

res.json({
notifications:[]
});

});

export default router;
