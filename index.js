const express = require('express');
const morgan = require('morgan');
const app = express()
const port = 3000

app.use(morgan('combined'))

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.listen(port, () => console.log('App listening on port ' + port))