import express from 'express'

const app = express()
const port = 4242

app.get('/', (req,res) => {
    console.log('Hej verden')
    res.send('Hello world')
})

app.listen(port, () => {
    console.log(`Server runs at http://localhost:${port}`)
})

