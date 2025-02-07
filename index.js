import express from 'express'
import dotenv from 'dotenv'
import { dbController } from './controller/dbController.js'
import { carController } from './controller/carController.js'
import { brandController } from './controller/brandController.js'
import { userController } from './controller/userController.js'
import { authController } from './controller/authController.js'

dotenv.config()

const app = express()
const port = process.env.SERVERPORT || 4242
app.use(express.urlencoded({ extended: true }))

// Route til root
app.get('/', (req,res) => {
    console.log('Hej verden')
    res.send('Hello world')
})

app.use(
    dbController, 
    carController,
    brandController,
    userController,
    authController
)

// Route til 404
app.get('*', (req,res) => {
    res.send('Could not find file')
})

app.listen(port, () => {
    console.log(`Server runs at http://localhost:${port}`)
})

