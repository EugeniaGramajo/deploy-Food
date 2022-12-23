const { Router } = require("express");
const {Diet_type}=require("../db");
const router = Router();

router.get("/",async(req,res)=>{
    try {
        let dietDb = await Diet_type.findAll()
        res.status(200).json(dietDb)
    } catch (error) {
        res.status(404).json("Diet not found")
    }
})

module.exports = router;