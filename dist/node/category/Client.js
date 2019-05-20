"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _core = require("../core");

/**
 *
 */
class Client extends _core.BaseClient {
  /**
   */
  get basepath() {
    return '/categories';
  }
  /**
   */


  describeNode(key) {
    return this.httpClient.get(this.relativePath(key));
  }
  /**
   */


  putNode(key, params) {
    return this.httpClient.put(this.relativePath(key), params);
  }
  /**
   */


  deleteNode(key) {
    return this.httpClient.delete(this.relativePath(key));
  }

}

exports.Client = Client;