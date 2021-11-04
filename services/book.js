const Service = require("./index");

class BookService extends Service {
  async getAllBooks() {
    try {
      return await this.model.find();
    } catch (err) {
      return undefined;
    }
  }
}

module.exports = BookService;
