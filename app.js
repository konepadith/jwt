require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const cors = require("cors")
// app.use(bodyParser.json())
app.use(express.json())
// app.use(bodyParser.urlencoded({extended:false}))
const userRouter = require("./api/users/user.router")
const empRouter = require("./api/employee/employee.router")
const utlRouter = require("./api/utility/utility.router")
app.use(cors())


app.use("/api/users", userRouter)
app.use("/api/employee", empRouter)
app.use("/api/utility",utlRouter)
app.listen(process.env.APP_PORT,()=>{
    console.log("Server up and running on PORT :",process.env.APP_PORT)
})