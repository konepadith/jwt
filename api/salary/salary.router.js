const { createSalary,getUserByUserId,getUsers,updateUsers,deleteUser , login} = require ("./salary.controller")
const router = require("express").Router()
const {checkToken}=require("../../auth/token_validation")

// router.get("/", checkToken ,getUsers)
router.post("/" ,createSalary)

// router.get("/:id",checkToken ,getUserByUserId)
// router.patch("/",checkToken ,updateUsers)
// router.delete("/",checkToken ,   deleteUser)
// router.post("/login",login)
router.get("/" ,getUsers)
module.exports = router