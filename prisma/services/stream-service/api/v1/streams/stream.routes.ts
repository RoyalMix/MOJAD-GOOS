import express from "express";

const router = express.Router();

router.get("/live",(req,res)=>{

res.json({
status:"live"
});

});

export default router;
