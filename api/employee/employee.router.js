const { createEmp ,loginEmp,getEmpByEmpId,getemp} = require("./employee.controller")
const router = require("express").Router()
const {checkToken}=require("../../auth/token_validation")
router.post("/" ,createEmp)
router.get("/:id" ,getEmpByEmpId)
router.post("/login",loginEmp)
router.get("/" ,getemp)
module.exports = router