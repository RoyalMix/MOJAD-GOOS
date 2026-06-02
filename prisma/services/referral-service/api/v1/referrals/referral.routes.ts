import express from "express";

const router = express.Router();

router.get("/generate/:userId", (req,res)=>{

res.json({
code:"MOJAD-"+Date.now()
});

});

export default router;
