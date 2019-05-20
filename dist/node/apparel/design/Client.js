"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Client = void 0;

var _core = require("../core");

/**
 */

/**
 *
 */
class Client extends _core.BaseClient {
  /**
   */
  get basepath() {
    return '/apparel/designs';
  }

  options(params = {}) {
    return {
      headers: {
        'X-BRAND': params.brand
      }
    };
  }
  /**
   *
   */


  list(brand, size = 10, offset = 0, opt = {}) {
    const condition = { ...opt.condition
    };
    return this.httpClient.get(this.relativePath(), {
      params: {
        size,
        offset,
        ...condition
      }
    });
  }
  /**
   *
   */


  describe(brand, id) {
    return this.httpClient.get(this.relativePath(id), this.options({
      brand
    }));
  }
  /**
   *
   */


  register(brand, entry) {
    return this.httpClient.post(this.relativePath(), entry, this.options({
      brand
    }));
  }
  /**
   *
   */


  update(brand, id, params) {
    return this.httpClient.post(this.relativePath(id), params, this.options({
      brand
    }));
  }
  /**
   *
   */


  archive(brand, id, params = {}) {
    return this.httpClient.post(this.relativePath(id, 'archive'), params, this.options({
      brand
    }));
  }
  /**
   *
   */


  unarchive(brand, id, params = {}) {
    return this.httpClient.post(this.relativePath(id, 'unarchive'), params, this.options({
      brand
    }));
  }
  /**
   * Order sample
   */


  order(brand, id, params) {
    return this.httpClient.post(this.relativePath(id, 'order'), params, this.options({
      brand
    }));
  }
  /**
   *
   */


  productize(brand, id, params = {}) {
    return this.httpClient.post(this.relativePath(id, 'productize'), params, this.options({
      brand
    }));
  }

}

exports.Client = Client;