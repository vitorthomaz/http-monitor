const Router = require("express").Router();

const home = (req, res, next) => {
  const status = 200;
  const message = "Primeira API";
  const error = null;

  res.status(status).send({
    status,
    message,
    error,
  });

  return next();
};

Router.route("/home").get(home);

module.exports = Router;
