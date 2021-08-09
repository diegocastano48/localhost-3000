const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

// Setting
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('News',path.join(__dirname,'news'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(app.get('port'),()=>{
    console.log("Server on port 3000");
});
