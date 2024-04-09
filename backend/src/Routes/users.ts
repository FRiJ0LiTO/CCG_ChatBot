
import {postUser} from "../Controllers/users"
import {getUser} from "../Controllers/users"

// done basic means it works but needs more validations
// done premium means fully done
const express = require("express")

const userRouter = express.Router()

// get user by id DONE BASIC
userRouter.get("/", getUser)

// new user to db DONE BASIC 
userRouter.post("/", postUser)

export {userRouter};