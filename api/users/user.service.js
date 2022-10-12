const { query } = require("express")
const pool = require("../../config/database")

module.exports = {
    create : (data, callBack)=>{
        pool.query(
            `insert into registration(firstName,lastName,gender,email,password,number)
            values(?,?,?,?,?,?)`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number
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
            `SELECT * FROM  registration`,
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
        pool,query(
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
    }
}