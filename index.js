const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
    // res.send('About page')
    // res.end()
    // res.json({
    //     name: 'Bangladesh',
    // })
    // res.status(200);
    // res.end();
    // res.sendStatus(400);
    // res.format({
    //     'text/plain': () => {
    //         res.send('hi');
    //     },
    //     'text/html': () => {
    //         res.render('pages/about', { name: 'Bangladesh' });
    //     },
    //     'application/json': () => {
    //         res.json({
    //             name: "Bangladesh",
    //             message: "About",
    //         })
    //     },
    //     default: () => {
    //         res.status(406).send('Not acceptable');
    //     }
    // })
    // res.cookie('name', 'learnwithsumit', {});
    // res.location('/test');
    // res.redirect('/test')
    res.set('Title', 'platform/learnWithSumit')
    console.log(res.get('Title'));
    res.end();
});

app.get('/test', (req, res) => {
    res.send('Hello');
});

app.listen(3000, () => {
    console.log('Listening to port 3000');
})