const { query } = require("express")
const pool = require("../../config/database")

module.exports = {
    getProvince: callBack=>{
        pool.query(
            `SELECT * FROM  tb_province`,
            [],
            (error,results,fields)=>{
                if (error) {
                return callBack(error)
                }
                return callBack(null,results)
            }
        )
    },
    getDistrict: callBack=>{
        pool.query(
            `SELECT * FROM  tb_district`,
            [],
            (error,results,fields)=>{
                if (error) {
                return callBack(error)
                }
                return callBack(null,results)
            }
        )
    },
    getVillage: callBack=>{
        pool.query(
            `SELECT * FROM  tb_village`,
            [],
            (error,results,fields)=>{
                if (error) {
                return callBack(error)
                }
                return callBack(null,results)
            }
        )
    },
    getCompany: callBack=>{
        pool.query(
            `SELECT * FROM  tb_company`,
            [],
            (error,results,fields)=>{
                if (error) {
                return callBack(error)
                }
                return callBack(null,results)
            }
        )
    },
    getDepartment: callBack=>{
        pool.query(
            `SELECT * FROM  tb_department`,
            [],
            (error,results,fields)=>{
                if (error) {
                return callBack(error)
                }
                return callBack(null,results)
            }
        )
    },
    getMajor: callBack=>{
        pool.query(
            `SELECT * FROM  tb_major`,
            [],
            (error,results,fields)=>{
                if (error) {
                return callBack(error)
                }
                return callBack(null,results)
            }
        )
    },
    getPosition: callBack=>{
        pool.query(
            `SELECT * FROM  tb_position`,
            [],
            (error,results,fields)=>{
                if (error) {
                return callBack(error)
                }
                return callBack(null,results)
            }
        )
    },
}