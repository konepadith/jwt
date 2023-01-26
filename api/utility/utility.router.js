const { ControlProvince,ControlDistrict,ControlVillage,ControlCompany,ControlDepartment,ControlPosition} = require ("./utility.controller")
const router = require("express").Router()
const {checkToken}=require("../../auth/token_validation")

router.get("/province" ,ControlProvince)
router.get("/district" ,ControlDistrict)
router.get("/village" ,ControlVillage)
router.get("/company" ,ControlCompany)
router.get("/department" ,ControlDepartment)
router.get("/position" ,ControlPosition)





module.exports = router