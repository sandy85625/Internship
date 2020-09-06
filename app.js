const express = require('express');
const path = require('path');
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');
const cookieParser = require('cookie-parser')
const session = require('express-session');
const passport = require('passport');
const passportLocals = require('./config/passport-local')
const db = require('./config/mongoose')
const app = express()

const port = 5000

// --------- Parsers --------- //
app.use(express.urlencoded());
app.use(cookieParser())

//----------- EJS Confrigation -----------//
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use("/assets", express.static('./assets'));

// ---------Session and Passport ---------//
app.use(session({ 		//Usuage
  secret: 'thats My Secret',
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 *60 * 1000}
}));
app.use(passport.initialize());
app.use(passport.session());


// --------- ROUTES -----------//
app.use('/auth', require('./routers/authentication'));
app.use('/', require('./routers/user'));

app.listen(port, () => {
  console.log(`Click this link to start : http://localhost:${port}`)
})