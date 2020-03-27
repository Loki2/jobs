if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose');

/*
****IMPORT ALL ROUTES COMPONENT
*/
const indexRoute = require('./routes/index');
const blogRoute = require('./routes/blog.route');
const productRoute = require('./routes/product.route');
const serviceRoute = require('./routes/service.route');
const aboutRoute = require('./routes/about.route');
const contactRoute = require('./routes/contact.route');
const jobsRoute = require('./routes/jobs.route');
const LoginRoute = require('./routes/login.route');
const RegisterRoute = require('./routes/register.route');
const userRoute = require('./routes/users');



mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true})
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to mongoose'))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayout);
app.use(express.static('public'));



/*
****USE ALL ROUTES THEN EXPORTS
*/
app.use('/', indexRoute);
app.use('/blogs', blogRoute);
app.use('/products', productRoute);
app.use('/services', serviceRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/jobs', indexRoute);
app.use('/new_jobs', jobsRoute);
app.use('/login', LoginRoute);
app.use('/register', RegisterRoute);


app.listen(process.env.PORT || 3000)