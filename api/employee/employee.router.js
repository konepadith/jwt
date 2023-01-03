const { createEmp ,loginEmp,getEmpByEmpId,getUsers} = require("./employee.controller")
const router = require("express").Router()
const {checkToken}=require("../../auth/token_validation")
router.post("/" ,createEmp)
router.get("/:id" ,getEmpByEmpId)
router.post("/login",loginEmp)
router.get("/" ,getUsers)
module.exports = router