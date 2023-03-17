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
    insertDepartment : (data, callBack)=>{
        pool.query(
            `insert into tb_department (
                department_id,
                department_code,
                department_name,
                department_namela,
                department_std,
                ) values(?,?,?,?,?)`,
            [
                data.department_id,
                data.department_code,
                data.department_name,
                data.department_namela,
                data.department_std,
            ],
            (error,results,fields)=>{
               if (error) {
                return callBack(error)
               }
               return callBack(null, results)
            }
        )
    },
    insertPosition : (data, callBack)=>{
        pool.query(
            `insert into tb_department (
                position_id,
                position_code,
                position_name,
                position_namela,
                position_std,
                ) values(?,?,?,?,?)`,
            [
                data.position_id,
                data.position_code,
                data.position_name,
                data.position_namela,
                data.position_std,
            ],
            (error,results,fields)=>{
               if (error) {
                return callBack(error)
               }
               return callBack(null, results)
            }
        )
    },
}