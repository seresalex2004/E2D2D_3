require('dotenv').config()
const express =require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

//routok
const cakesRouter = require('./routes/cakes')
app.use('/api/cakes', cakesRouter)

//szerver futtatas
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Backend fut: http://localhost:${PORT}`)
    console.log(`API:  http://localhost:${PORT}/api/cakes`)
})