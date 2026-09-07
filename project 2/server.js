const express = require('express')

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


app.get('/', (req, res)=>{
  res.render('index', { messages })
})

app.get('/new', (req, res)=>{
  res.render('form')
})

app.post('/new', (req, res)=>{
   const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
    }
    messages.push(newMessage)
  res.redirect('/')
})

app.listen (PORT, ()=>{
  console.log (`Listening on port ${PORT}`)
})
