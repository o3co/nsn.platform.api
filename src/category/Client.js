/* @flow strict */

import {
  BaseClient,
  type Response,
} from '../core'

import type {
  Key,
  //
  Node,
} from './types'

/**
 */
export type PutParams = {}

/**
 *
 */
export class Client extends BaseClient {
  /**
   */
  get basepath() {
    return '/categories'
  }

  /**
   */
  describeNode = (key: Key): Response<Node> => {
    return this.httpClient.get(this.path(key))
  }

  /**
   */
  putNode = (key: Key, params: PutParams): Response<Node> => {
    return this.httpClient.put(this.path(key), params)
  }

  /**
   */
  deleteNode = (key: Key): Response<void> => {
    return this.httpClient.delete(this.path(key))
  }
}
