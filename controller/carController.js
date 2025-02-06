import express from 'express'
import { carModel } from '../models/carModel.js'

export const carController = express.Router()

// Route to list (READ)
carController.get('/cars', async (req, res) => {
    try {
        const data = await carModel.findAll({
            attributes: ['id', 'brand', 'color']
        })

        if (!data || data.length === 0) {
            return res.json({ message: 'No data found' })
        }
        res.json(data)
    } catch (error) {
        console.error(`Could not get car list: ${error}`)
    }
})

// Route to details (READ)
carController.get('/cars/:id([0-9]*)', async (req, res) => {
    try {
        const { id } = req.params
        const data = await carModel.findOne({
            where: {
                id: id
            },
            attributes: ['brand', 'color']
        })

        if (!data) {
            return res.json({ message: `Could not find car on id #${id}` })
        }

        return res.json(data);

    } catch (error) {
        console.error(`Could not get car details: ${error}`)
    }
})

// Route to create (CREATE)
carController.post('/cars', async (req, res) => {
    const { brand, model, year, price, color } = req.body;

    if (!brand || !model || !year || !price || !color) {
        return res.json({ message: 'Missing required data' })
    }

    try {
        const result = await carModel.create({
            brand, model, year, price, color
        })

        res.status(201).json(result)
    } catch (error) {
        return res.json({ message: `Could not create car: ${error.message}` })
    }
})

carController.put('/cars', async (req, res) => {
    const { brand, model, year, price, color, id } = req.body;

    if (!id || !brand || !model || !year || !price || !color) {
        return res.json({ message: 'Missing required data' })
    }

    try {
        const result = await carModel.update({
            brand, model, year, price, color
        },
            { where: { id } }
        )
        if(result) {
            res.json({ message: `Updated id#${id}`})
        }
    } catch (error) {
        return res.json({ message: `Could not update car: ${error.message}` })
    }
})

carController.delete('/cars/:id([0-9]*)', async (req, res) => {
    const { id } = req.params
    
    if(id) {
        try {
            await carModel.destroy({
                where: { id }
            })
            res.send({
                message: `Record #${id} deleted`
            })
        } catch (error) {
            res.send(`Error! Could not delete car: ${error}`)
        }
    } else {
        res.send({
            message: 'Id not valid'
        })
    }
    
    
})