const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")
const pool = require("../config/database")

//registering
exports.register=async(req,res)=>{
    const { username, email, password } = req.body;
    try {
        const hashedPassword = bcrypt.hash(password, 20);
        const [result] = await pool.query('insert into users (username,email,password) values(?,?,?)',
    [username,email,password]
        )
        const token=jwt.sign({id:result.insertId})
    }
    catch (err) {
        console.log(err)
    }
    }