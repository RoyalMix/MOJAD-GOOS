import express from "express";

const router = express.Router();

router.get("/status",(req,res)=>{

res.json({
identity:"active"
});

});

export default router;
