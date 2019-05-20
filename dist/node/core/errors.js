"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthenticationError = void 0;

/**
 */
class AuthenticationError extends Error {
  constructor(error) {
    super(`Authentication Fault: ${error.code ? error.code : ''} : ${error.message} : ${error.request._header}`);
    this.error = error;
    this.request = error.request;
    this.name = this.constructor.name;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(this.message).stack;
    }
  }

  get errorCode() {
    return this.error.code ? this.error.code : '';
  }

}

exports.AuthenticationError = AuthenticationError;