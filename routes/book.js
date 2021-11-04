const Router = require("./index");
const BookController = require("../controllers/book");

class BookRouter extends Router {
  constructor(model, modelName) {
    super(model, modelName, new BookController(model, modelName));

    this.router.route(this.endpoint).get((req, res, next) => {
      this.controller.getAllBooks(req, res, next);
    });
  }
}

module.exports = BookRouter;
