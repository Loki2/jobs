// if(process.env.NODE_ENV !== 'production'){
//     require('dotenv').config()
// }

const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose');
//const PORT = process.env.PORT || 4000; 
/*
****IMPORT ALL ROUTES COMPONENT
*/
const indexRoute = require('./routes/index');
const blogRoute = require('./routes/blog.route');
// const productRoute = require('./routes/product.route');
// const serviceRoute = require('./routes/service.route');
// const aboutRoute = require('./routes/about.route');
// const contactRoute = require('./routes/contact.route');
const jobsRoute = require('./routes/jobs.route');
// const LoginRoute = require('./routes/login.route');
// const RegisterRoute = require('./routes/register.route');
const userRoute = require('./routes/users');


mongoose.connect('DATABASE_URL=mongodb://localhost/jobportal', { useNewUrlParser: true, useUnifiedTopology: true})
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

// Blogs route middleware
app.use('/blogs', blogRoute);


// app.use('/products', productRoute);

app.use('/service', indexRoute);
app.use('/about', indexRoute);
app.use('/contact', indexRoute);
app.use('/jobs', jobsRoute);
// app.use('/new_jobs', jobsRoute);
app.use('/users', userRoute);
app.use('/users', userRoute);


app.listen( process.env.PORT || 4000)