const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const SECRET_KEY = process.env.SECRET_KEY

exports.addUser = async (req, res) => {
    try {
        const {email, username, password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ email, username, password: hashedPassword })
        const userExists = await User.findOne({ email });
        if (userExists) {
            res.status(406).json({error: 'User already exists'})
            return;
        }
        await newUser.save();
        res.status(201).json({message: 'User Created successfully'})    
    } catch (error) {
        console.error('Error creating new user:', error)
        res.status(500).json({error: 'Error creating new user'})
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(201).json(users)
    } catch (error) {
        res.status(500).json({error: 'Unable to get users'})
    }
}

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(401).json({error: 'Invalid credentials'})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(401).json({error: 'Invalid credentials'})
        }
        const token = jwt.sign({userId: user._id}, SECRET_KEY, {expiresIn: '1h'})
        res.json({message: 'Login successful', token})
    } catch (error) {
        res.status(500).json({error: 'Error logging in'})
    }
}