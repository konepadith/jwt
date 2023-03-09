const {createEmployee, getEmpByuserEmail,getEmpByEmpId,getemp} = require("./employee.service")
const {genSaltSync,hashSync, compareSync} = require ("bcrypt")
const { sign ,decode }= require("jsonwebtoken")

module.exports = {
    
    createEmp : (req,res)=>{
        const body = req.body
        
        const salt = genSaltSync(10)
        body.employee_password = hashSync(body.employee_password, salt)
        createEmployee(body,(err,results)=>{
            console.log(body)
            if (err) {
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
    getEmpByEmpId: (req,res)=>{
        const id = req.params.id
        getEmpByEmpId(id,(err,results)=>{
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

    loginEmp : (req,res)=>{
        const body = req.body
        getEmpByuserEmail(body.employee_email,(err,results)=>{
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
             const jsontoken = sign ({result: results},"qwe1234",{
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
     },
     getemp: (req,res)=>{
        getemp((err,results)=>{
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
}