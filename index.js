import express from 'express'
import dotenv from 'dotenv'
import sequelize from './config/sequelizeClient.js'

dotenv.config()

const app = express()
const port = process.env.SERVERPORT || 4242

app.get('/', (req,res) => {
    console.log('Hej verden')
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Server runs at http://localhost:${port}`)
})

