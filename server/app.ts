import express from 'express'
import cookieParser from 'cookie-parser'

import postRoutes from './routes/posts.js'
import userRoutes from './routes/users.js'
import authRoutes from './routes/auth.js'


const app = express()

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'))
app.use(express.json())
app.use(cookieParser())
app.use('/auth', authRoutes);
app.use("/posts", postRoutes)
app.use('/users', userRoutes)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html')
})

app.listen(PORT, () => {
    console.log('Server is running')
})