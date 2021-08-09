const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const rutas = require('./router');
const app = express();

// Setting
app.set('port',process.env.PORT || 4000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/router',rutas);



app.listen(app.get('port'),()=>{
    console.log("Server on port 4000");
});
