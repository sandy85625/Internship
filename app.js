// ------- Importing modules -------//
const express               = require('express');
const path                  = require('path');
const ejs                   = require('ejs');
const expressLayouts        = require('express-ejs-layouts');
const cookieParser          = require('cookie-parser')
const session               = require('express-session');
const passport              = require('passport');
const sassMiddleware        = require('node-sass-middleware');
const passportLocals        = require('./config/passport-local');
const FacebookStrategy      = require('./config/passport-facebook');
const GoogleStrategy        = require('./config/passport-google')
const MongoStore            = require('connect-mongo')(session);
const db                    = require('./config/mongoose')
const keys                  = require('./config/keys')
const app                   = express()

const port = 5429

// --------- Parsers --------- //
app.use(express.urlencoded());
app.use(cookieParser())

// ---------SCSS------------//
app.use(sassMiddleware({
  src: path.join(__dirname, './assets/scss'),
  dest: path.join(__dirname, './assets/css'),
  debug: false,
  outputStyle: 'expanded',
  prefix:  '/css' 
}));

//----------- EJS Confrigation -----------//
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use("/assets", express.static('./assets'));

// ---------Session and Passport ---------//
app.use(session({ 		
  name : 'user',
  secret: keys.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 *60 * 100},
  store: new MongoStore({ mongooseConnection: db , autoRemove :'disabled'})
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticationUser);

// --------- ROUTES -----------//
app.use('/auth', require('./routers/authentication'));
app.use('/', require('./routers/user'));

// ---------Port listen------------//
app.listen(port, () => {
  console.log(`Click this link to start : http://localhost:${port}`)
})