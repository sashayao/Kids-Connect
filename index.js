
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

app.get('/', (req, res) => res.sendFile('home.html', {root : __dirname + '/public'}));

