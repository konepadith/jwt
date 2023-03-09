const { query } = require("express")
const pool = require("../../config/database")

module.exports = {
    createEmployee : (data, callBack)=>{
        pool.query(
            `insert into tb_employee (
                employee_code,
                employee_name,
                employee_surname,
                employee_gender,
                employee_email,
                employee_password,
                employee_dob,
                employee_phonenumber,
                company_id,
                department_id,
                major_id,
                position_id,
                id_village,
                id_district,
                id_province
                ) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.employee_code,
                data.employee_name,
                data.employee_surname,
                data.employee_gender,
                data.employee_email,
                data.employee_password,
                data.employee_dob,
                data.employee_phonenumber,
                data.company_id,
                data.department_id,
                data.major_id,
                data.position_id,
                data.id_village,
                data.id_district,
                data.id_province,
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
    getEmpByEmpId: (id,callBack)=>{
        pool.query(
            `SELECT * FROM  tb_employee where employee_id=?`,
            [id],
            (error,results,fields)=>{
                if (error) {
                return callBack(error)
                }
                return callBack(null,results)
            }
        )
    },
}