const Express=require('express');
const mongoose =require('mongoose');
const morgan = require('morgan');
const path = require('path');
const bodyParser=require('body-parser');
const app=Express();

const { url } = require('./config/Connec_bd');
mongoose.connect(url,{
    useNewUrlParser: true
});
const Routes= require('./Router/Routers');

app.set('port', process.env.PORT|| 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');


app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use('/',Routes);
//static file
app.use(Express.static(path.join(__dirname, '/public')));

app.listen(app.get('port'), ()=>{
    console.log('Server on port ', app.get('port'));
});
