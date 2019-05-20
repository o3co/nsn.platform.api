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
    return '/colors';
  }
  /**
   */


  listEntries() {
    return this.httpClient.get(this.relativePath());
  }
  /**
   */


  describeEntry(name) {
    return this.httpClient.get(this.relativePath(name));
  }

}

exports.Client = Client;