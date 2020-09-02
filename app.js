const express = require('express');

const path = require('path');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 5000

//----------- EJS Confrigation -----------//
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use("/assets", express.static('./assets'));



// --------- ROUTES -----------//
app.get('/', (req, res) => {
  return res.render('signin')
})


app.get('/signup',(req, res)=>{
    return res.render('signup')
})

app.get('/user',(req, res)=>{
    return res.render('user')
})

app.listen(port, () => {
  console.log(`Click this link to start : http://localhost:${port}`)
})