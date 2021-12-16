const express = require('express');
const cookieParser = require('cookie-parser');
const handler = require('./handler');

const app = express();

const adminRoute = express.Router();

app.use(express.json());
app.use(cookieParser());

adminRoute.get('/dashboard', (req, res) => {
    // console.log('Baseurl', req.originalUrl);
    // console.log('url', req.url);
    // console.log('path', req.path);
    // console.log(req.hostname);
    // console.log(req.ip);
    console.log(req.method);
    res.send('We are in admin dashboard');
});

app.use('/admin', adminRoute);

// app.get('/user/:id', (req, res) => {
    // console.log('Baseurl ', req.originalUrl);
    // console.log('url ', req.url);
    // console.log('path', req.path);
    // console.log(req.hostname)
    // console.log(req.ip);
    // console.log(req.protocol);
    // console.log(req.params);
    // console.log(req.query);
    // console.log(req.secure);
    // res.send('Hello world');
// })

app.get('/user/:id', handler);

app.get('/about', (req, res) => {
    // console.log('route', req.route);
    console.log('accepts', req.accepts('json'));
    res.send('Hello world');
})

app.post('/user', (req, res) => {
    console.log(req.body);  // this is gonna return the body
    res.send('Hello this is a post request');
})

app.listen(3000, () => {
    console.log('listening to port 3000');
})