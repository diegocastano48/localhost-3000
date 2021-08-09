const express = require('express');
const path = require('path');
const body_parser = require('body-parser');
const morgan = require('morgan');
const app = express();

// Setting
app.set('port',process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('News',path.join(__dirname,'news'));

// middlewares
//app.unsubscribe(morgan('dev'));
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());





app.listen(app.get('port'),()=>{
    //console.log("Server on port 3000");
});
