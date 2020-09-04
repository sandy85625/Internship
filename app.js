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
app.use('/auth', require('./routers/authentication'));
app.use('/', require('./routers/user'));

app.listen(port, () => {
  console.log(`Click this link to start : http://localhost:${port}`)
})