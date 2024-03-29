const { create,getUsers,getUserByUserId,updateUsers,deleteUser,getUserByuserEmail} = require("./salary.service")

const {genSaltSync,hashSync, compareSync} = require ("bcrypt")
const { sign }= require("jsonwebtoken")

module.exports = {
    createSalary: (req,res)=>{
        const body = req.body
        create(body, (err, results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success : 0,
                    message: "Database connection error"
                })
            }
            return res.status(200).json({
                success : 1,
                data: results
            })
        })
    },
    getUserByUserId: (req,res)=>{
        const id = req.params.id
        getUserByUserId(id,(err,results)=>{
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.json({
                    success:0,
                    message:'Record not found'
                })
            }
            return res.json({
                success:1,
                data:results
            })
        })
    },
    getUsers: (req,res)=>{
        getUsers((err,results)=>{
            if (err) {
                console.log(err)
                return
            }
            return res.json({
                success:1,
                data:results
            })
        })
    },
    updateUsers: (req,res)=>{
        const body = req.body
        const salt = genSaltSync(10)
        body.employee_pass = hashSync(body.employee_pass, salt);
        updateUsers(body, (err, results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success : 0,
                    message: "Database connection error"
                })
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message:"Failed to update user"
                })
            }
            return res.json({
                success : 1,
                message: "update successfully"
            })
        })
    },
    deleteUser:(req,res)=>{
        const data = req.body
        deleteUser(data,(err,results)=>{
            if (err) {
                console.log(err)
                return
            }
            if (!results) {
                return res.json({
                    success:0,
                    message:"Record Not Found"
                })
            }
        })
    },
    login: (req,res)=>{
       const body = req.body
       getUserByuserEmail(body.email,(err,results)=>{
        if (err) {
            console.log(err)
        }
        if (!results) {
            return res.json({
                success:0,
                data:"Invalid email or password"
            })
        }
        const result = compareSync(body.employee_pass,results.employee_pass)
        if (result) {
            results.employee_pass = undefined;
            const jsontoken = sign ({result: results}, "qwe1234",{
              expiresIn: "1h"  
            })
            return res.json({
                success: 1,
                message: " login successfully",
                token: jsontoken
            })
        }else{
            return res.json({
                success:0,
                data: "invalid email or password"
            })
        }
       }) 
    }
}