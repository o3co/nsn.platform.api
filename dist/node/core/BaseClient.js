"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseClient = void 0;

var _axios = _interopRequireWildcard(require("axios"));

var _path = _interopRequireDefault(require("path"));

var _errors = require("./errors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/*  strict */

/**
 */
class BaseClient {
  /**
   */

  /**
   */
  get basepath() {
    return '';
  }
  /**
   */


  relativePath(...args) {
    const paths = Array.prototype.slice.apply(args);

    if (this.basepath) {
      paths.unshift(this.basepath);
    }

    return _path.default.join.apply(null, paths);
  }
  /**
   */


  constructor(params = {}) {
    if (params.httpClient && params.httpClient instanceof _axios.Axios) {
      this.httpClient = params.httpClient;
    } else {
      this.httpClient = _axios.default.create(params.httpClient);
    }

    this.httpClient.interceptors.response.use(response => response, error => {
      const res = JSON.stringify(error.response) || 'undefined'; // eslint-disable-next-line no-console

      console.log(`ERROR: (res = ${res}, status = ${error.response ? error.response.status : ''} )`);
      const err = JSON.stringify(error.message) || ''; // eslint-disable-next-line no-console

      console.log(`ERROR: ${err}`);

      if (error.response && 401 == error.response.status) {
        return Promise.reject(new _errors.AuthenticationError(error));
      } else {
        return Promise.reject(error);
      }
    });
  }

}

exports.BaseClient = BaseClient;