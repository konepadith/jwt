const { getProvince, getDistrict, getVillage,getCompany,getDepartment,getPosition,getMajor } = require("./utility.service")

const { genSaltSync, hashSync, compareSync } = require("bcrypt")
const { sign } = require("jsonwebtoken")

module.exports = {
    ControlProvince: (req, res) => {
        getProvince((err, results) => {
            if (err) {
                console.log(err)
                return
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    ControlDistrict: (req, res) => {
        getDistrict((err, results) => {
            if (err) {
                console.log(err)
                return
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    ControlVillage: (req, res) => {
        getVillage((err, results) => {
            if (err) {
                console.log(err)
                return
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    ControlCompany: (req, res) => {
        getCompany((err, results) => {
            if (err) {
                console.log(err)
                return
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    ControlDepartment: (req, res) => {
        getDepartment((err, results) => {
            if (err) {
                console.log(err)
                return
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    ControlMajor: (req, res) => {
        getMajor((err, results) => {
            if (err) {
                console.log(err)
                return
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
    ControlPosition: (req, res) => {
        getPosition((err, results) => {
            if (err) {
                console.log(err)
                return
            }
            return res.json({
                success: 1,
                data: results
            })
        })
    },
}