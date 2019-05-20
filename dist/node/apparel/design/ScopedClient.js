"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScopedClient = void 0;

var _Client = require("./Client");

/**
 *
 */
class ScopedClient {
  /**
   */

  /**
   */

  /**
   */
  get brand() {
    return this.params.brand;
  }
  /**
   */


  constructor(params) {
    this.params = params;
    this.baseClient = params.baseClient ? params.baseClient : new _Client.Client(params);
  }
  /**
   *
   */


  list(size = 10, offset = 0, opt = {}) {
    return this.baseClient.list(this.brand, size, offset, opt);
  }
  /**
   *
   */


  describe(id) {
    return this.baseClient.describe(this.brand, id);
  }
  /**
   *
   */


  register(entry) {
    return this.baseClient.register(this.brand, entry);
  }
  /**
   *
   */


  update(id, params) {
    return this.baseClient.update(this.brand, id, params);
  }
  /**
   *
   */


  archive(id, params = {}) {
    return this.baseClient.archive(this.brand, id, params);
  }
  /**
   *
   */


  unarchive(id, params = {}) {
    return this.baseClient.unarchive(this.brand, id, params);
  }
  /**
   * Order sample
   */


  order(id, params) {
    return this.baseClient.order(this.brand, id, params);
  }
  /**
   *
   */


  productize(id, params = {}) {
    return this.baseClient.productize(this.brand, id, params);
  }

}

exports.ScopedClient = ScopedClient;