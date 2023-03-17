const { query } = require("express")
const pool = require("../../config/database")

module.exports = {
    create : (data, callBack)=>{
        pool.query(
            `insert into tb_salary (
                hr_id,
                employee_id,
                salary_amount,
                salary_fake,
                tax,
                salary_std) values(?,?,?,?,?,?)`,
            [
                data.hr_id,
                data.employee_id,
                data.salary_amount,
                data.salary_fake,
                data.tax,
                data.salary_std
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