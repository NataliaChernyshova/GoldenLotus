const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set('views', './templates')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

let port = 3000
app.listen(port, () => {
  console.log(`Сервер запущен по ссылке: http://localhost:${port}`)
})
