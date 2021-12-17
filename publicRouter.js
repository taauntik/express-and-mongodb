const express = require("express");

const publicRouter = express.Router();

// publicRouter.param((param, option) => (req, res, next, val) => {
//   if (val === option) {
//     next();
//   } else {
//     res.sendStatus(403);
//   }
// });

// publicRouter.param("user", 'name');

// publicRouter.get("/:user", (req, res) => {
//   res.send('Hello admin');
// });

// publicRouter.get("/about", (req, res) => {
//   res.send("Welcome to public about page");
// });

// learn about router.route() method
publicRouter.route('/')
    .get((req, res) => {
        res.send('GET')
    })
    .post((req, res) => {
        res.send('POST')
    })
    .put((req, res) => {
        res.send('PUT')
    })
    .delete((req, res) => {
        res.send('delete')
    })

module.exports = publicRouter;
