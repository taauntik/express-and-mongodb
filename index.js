const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cookieParser());
const adminRouter = express.Router();

adminRouter.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

const loggerWrapper = (options) => {
  return (req, res, next) => {
    if (options.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} ${
          req.originalUrl
        } - ${req.protocol} - ${req.ip}`
      );
      next();
    }
    throw new Error("Failed to log");
  };
};

adminRouter.use(loggerWrapper({ log: false }));

const errorMiddleWare = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('There was a server side error');
}

app.use(errorMiddleWare)
// app.use(cookieParser());
// built in middleware

app.use("/admin", adminRouter);

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(3000, () => {
  console.log("listening to port 3000");
});
