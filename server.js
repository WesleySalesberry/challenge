const express = require('express')
const cors = require('cors')
const app = express()
const connectDB = require('./database/mainDB')
const path = require('path')

const routes = require('./route/routes')

app.use(express.json({limit: '1mb'}))
app.use(cors())
app.use('/files', express.static(path.resolve(__dirname, '..', 'files')));
app.get('/', (req, res) => res.send('API Running'));

app.use(routes)

connectDB()
const PORT = 3000

app.listen(PORT, () => console.log(`> Server Started On: http://localhost:${PORT}`));
