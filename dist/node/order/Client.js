"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _core = require("../core");

/**
 *
 * @class
 */
class Client extends _core.BaseClient {
  /**
   */
  get basepath() {
    return '/orders';
  }
  /**
   * List entries
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
   * Describe entry
   */


  describe(id) {
    return this.httpClient.get(this.relativePath(id));
  }
  /**
   */


  register(params) {
    return this.httpClient.post(this.relativePath(), params);
  }
  /**
   */


  approve(id, params = {}) {
    return this.httpClient.post(this.relativePath(id, 'approve'), params);
  }
  /**
   */


  reject(id, params = {}) {
    return this.httpClient.post(this.relativePath(id, 'reject'), params);
  }

}

exports.Client = Client;