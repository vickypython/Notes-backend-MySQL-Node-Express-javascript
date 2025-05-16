import mysql from 'mysql2/promise'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path:path.join(process.cwd(),'.env')})
export const db=mysql.createPool({
    HOST:process.env.HOST,
    user:process.env.user,
    password:process.env.password,
   databaseName:process.env.databaseName
})