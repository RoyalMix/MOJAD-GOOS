import express from "express";

const router = express.Router();

router.post("/register",(req,res)=>{

res.json({
mojadId:"MOJAD-XXXX",
status:"created"
});

});

router.post("/verify",(req,res)=>{

res.json({
status:"verified"
});

});

export default router;
