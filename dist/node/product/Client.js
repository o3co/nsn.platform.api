"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _core = require("../core");

/*  strict */
class Client extends _core.BaseClient {
  /**
   */
  get basepath() {
    return '/products';
  }
  /**
   *
   */


  list(size = 10, offset = 0) {
    return this.httpClient.get(this.relativePath(), {
      params: {
        size,
        offset
      }
    });
  }
  /**
   */


  describe(id) {
    return this.httpClient.get(this.relativePath(id));
  }

}

exports.Client = Client;