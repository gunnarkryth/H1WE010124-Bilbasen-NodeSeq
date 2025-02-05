import express from 'express'
import { carModel } from '../models/carModel.js'

export const carController = express.Router()

// Route to list
carController.get('/cars', async (req, res) => {
    res.send('Get list of cars')
})

// Route to details
carController.get('/cars/:id([0-9]*)', async (req, res) => {
    res.send(`Get details for record #${req.params.id}`)
})