"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helper = void 0;

var _consts = require("./consts");

/**
 */
class Helper {
  /**
   */
  labelEntryState(state) {
    if (_consts.EntryStates[state]) {
      return _consts.EntryStates[state];
    } else {
      throw new Error(`Unknown state ${state}`);
    }
  }

}
/**
 */


const helper = new Helper();
exports.helper = helper;