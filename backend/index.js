import express from 'express'
import cors from 'cors'
import connectDB from './config/connectdb.js'
import notFound from './middleware/notFound.js'
import errorHandler from './middleware/error.js'
import students from './routes/student.js'


const app = express()
const port =  8000
const DATABASE_URL = "mongodb+srv://luckypatel:sttl123@cluster0.z6pvres.mongodb.net/?retryWrites=true&w=majority"


app.use(cors("*"))
app.use(express.json())
connectDB(DATABASE_URL)

app.get('/api/', (req, res) => {
    res.send('Hello World')
})

app.use('/api/student',students )

app.use(notFound)
app.use(errorHandler)


app.listen(port, () => {
    console.log(`Server listening at http://127.0.0.1:${port}`)
})