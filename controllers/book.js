const Controller = require("./index");
const BookService = require("../services/book");

const SuccessfulResponse = require("../middleware/succesfulResponse");
const ErrorResponse = require("../utils/errorResponse");

class BookController extends Controller {
  constructor(model, modelName) {
    super(model, modelName, new BookService(model));
  }

  async getAllBooks(req, res, next) {
    try {
      const books = await this.service.getAllBooks();

      if (!books) {
        return next(new ErrorResponse(`No books were found.`, 404));
      }

      new SuccessfulResponse(
        res,
        200,
        `The books were successfully found.`,
        books
      ).buildResponse();
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = BookController;
