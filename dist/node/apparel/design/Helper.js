"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.helper = void 0;

var _consts = require("./consts");

/**
 * @class
 */
class Helper {
  /**
   */
  labelEntryState(state) {
    switch (state) {
      case 'active':
      case 'deleted':
      case 'archived':
        return _consts.EntryStates[state];

      default:
        throw new Error(`Unknown state ${state}`);
    }
  }

}
/**
 *
 * @example ```
 *
 * import {
 *   apparel,
 * } from 'nsn.platform.apparel'
 *
 * const label = apparel.design.helper.labelEntryState(state)
 * ```
 */


const helper = new Helper();
exports.helper = helper;