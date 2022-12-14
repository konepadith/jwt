const { query } = require("express")
const pool = require("../../config/database")

module.exports = {
    createEmployee : (data, callBack)=>{
        pool.query(
            `insert into tb_employee (employee_code,
                employee_name,
                employee_surname,
                employee_gender,
                employee_email,
                employee_pass,
                employee_dob,
                employee_phonenumber,
                id_village,
                id_district,
                id_province,
                employee_img) values(?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.employee_code,
                data.employee_name,
                data.employee_surname,
                data.employee_gender,
                data.employee_email,
                data.employee_pass,
                data.employee_dob,
                data.employee_phonenumber,
                data.id_village,
                data.id_district,
                data.id_province,
                data.employee_img,
            ],
            (error,results,fields)=>{
               if (error) {
                return callBack(error)
               }
               return callBack(null, results)
            }
        )
    },
    getEmpByuserEmail: (employee_email,callBack)=>{
        pool.query(
            `SELECT * FROM tb_employee WHERE employee_email = ?`,
            [employee_email],
            (error,results,fields)=>{
                if (error) {
                    callBack(error)
                }
                return callBack(null,results[0])
            }
        )
    },
    // getEmpByEmpId: (id,callBack)=>{
    //     pool.query(
    //         `SELECT * FROM  registration WHERE id = ?`,
    //         [id],
    //         (error,results,fields)=>{
    //             if (error) {
    //             return callBack(error)
    //             }
    //             return callBack(null,results)
    //         }
    //     )
    // },
    getUsers: callBack=>{
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
}