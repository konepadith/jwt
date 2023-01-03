const { query } = require("express")
const pool = require("../../config/database")

module.exports = {
    create : (data, callBack)=>{
        pool.query(
            `insert into tb_employee (employee_code,
                employee_name,
                employee_surname,
                employee_gender,
                employee_email,
                employee_dob,
                employee_phonenumber,
                id_village,
                id_district,
                id_province,
                employee_img) values(?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.employee_code,
                data.employee_name,
                data.employee_surname,
                data.employee_gender,
                data.employee_email,
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
    getUsers: callBack=>{
        pool.query(
            `SELECT * FROM  tb_employee`,
            [],
            (error,results,fields)=>{
                if (error) {
                return callBack(error)
                }
                return callBack(null,results)
            }
        )
    },
    getUserByUserId: (id,callBack)=>{
        pool.query(
            `SELECT * FROM  registration WHERE id = ?`,
            [id],
            (error,results,fields)=>{
                if (error) {
                return callBack(error)
                }
                return callBack(null,results)
            }
        )
    },
    updateUsers:(data,callBack)=>{
        pool.query(
            'UPDATE registration set firstname=?,lastname=?,gender=?,email=?,password=?,number=? where id =?',
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error,results,fields)=>{
                if (error) {
                return callBack(error) 
                }
                return callBack(null,results[0])
            }
        )
    },
    deleteUser:(data,callBack)=>{
        pool,query(
            'DELETE FROM registration where id = ?',
            [
                data.id
            ],
            (error,results,fields)=>{
                if (error) {
                return callBack(error) 
                }
                return callBack(null,results[0])
            }
        )
    },
    getUserByuserEmail: (email,callBack)=>{
        pool.query(
            `SELECT * FROM registration WHERE email = ?`,
            [email],
            (error,results,fields)=>{
                if (error) {
                    callBack(error)
                }
                return callBack(null,results[0])
            }
        )
    }
}