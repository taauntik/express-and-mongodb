const express = require('express');
const app = express();


// app.use(express.text());
/**
 * app.use(express.raw()) through this we can get text from client
 * app.use(express.json()) through this we can get json format data from client
 * app.use(express.urlencoded()) through this we can get data with urlencoded format
 * app.use(express.text()) through this we can get raw data from client
 */

// let's learn about express.static
// app.use(express.static(`${__dirname}/public`, {
//     index: 'home.html'
// }));

// let's learn a little bit about express.Router() function
const router = express.Router({
    caseSensitive: true
});

app.use(router);

router.get("/about", (req, res) => {
    res.send("hello world this is get request");
})

// app.post("/", (req, res) => {
//     console.log(req.body);
//     res.send("hello world this is post request");
// })

app.listen(3000, () => console.log('Server is running on port 3000'));