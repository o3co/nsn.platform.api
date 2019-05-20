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
  get basepath() {
    return '/brands';
  }
  /**
   * List brand entries
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
   * Describe the brand entry
   */


  describeEntry(key) {
    return this.httpClient.get(this.relativePath(key));
  }
  /**
   */


  createEntry(param) {
    return this.httpClient.get(this.relativePath());
  }
  /**
   */


  updateEntry(key, params) {
    return this.httpClient.get(this.relativePath(key));
  }
  /**
   */


  deleteEntry(key) {
    return this.httpClient.delete(this.relativePath(key));
  }
  /**
   * List designers of the brand
   */


  listDesigners(key) {
    return this.httpClient.get(this.relativePath(key, '/teams/designer/members'));
  }

}

exports.Client = Client;