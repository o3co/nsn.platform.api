/* @flow strict */

import {
  BaseClient,
  type Response,
  type PageResult,
} from '../core'

import type {
  Id,
  //
  IndexedEntry,
  Entry,
} from './types'

/**
 */
export type RegisterParams = {
}

/**
 */
export type ApproveParams = {}

/**
 */
export type RejectParams = {}

/**
 *
 * @class
 */
export class Client extends BaseClient {
  /**
   */
  get basepath(): string {
    return '/orders'
  }

  /**
   * List entries
   */
  list(size: number = 10, offset: number = 0): Response<PageResult<IndexedEntry>> {
    return this.httpClient.get(this.relativePath(), {
      params: {
        size,
        offset,
      },
    })
  }

  /**
   * Describe entry
   */
  describe(id: Id): Response<Entry> {
    return this.httpClient.get(this.relativePath(id))
  }

  /**
   */
  register(params: RegisterParams): Response<Entry> {
    return this.httpClient.post(this.relativePath(), params)
  }

  /**
   */
  approve(id: Id, params: ApproveParams = {}): Response<Entry> {
    return this.httpClient.post(this.relativePath(id, 'approve'), params)
  }

  /**
   */
  reject(id: Id, params: RejectParams = {}): Response<Entry> {
    return this.httpClient.post(this.relativePath(id, 'reject'), params)
  }
}

