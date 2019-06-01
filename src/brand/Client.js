/* @flow strict */

import {
  BaseClient,
  type Response,
  type PageResult,
} from '../core'

import type {
  Key,
  Member,
  //
  IndexedEntry,
  Entry,
} from './types'

/**
 */
export type CreateParams = {}

/**
 */
export type UpdateParams = {}

/**
 *
 * @class
 */
export class Client extends BaseClient {

  get basepath() {
    return '/brands'
  }

  /**
   * List brand entries
   */
  list = (size: number = 10, offset: number = 0): Response<PageResult<IndexedEntry>> => {
    return this.httpClient.get(this.relativePath(), {
      params: {
        size,
        offset,
      },
    })
  }

  /**
   * Describe the brand entry
   */
  describeEntry = (key: Key): Response<Entry> => {
    return this.httpClient.get(this.relativePath(key))
  }

  /**
   */
  createEntry = (param: CreateParams): Response<Entry> => {
    return this.httpClient.get(this.relativePath())
  }

  /**
   */
  updateEntry = (key: Key, params: UpdateParams): Response<void> => {
    return this.httpClient.get(this.relativePath(key))
  }

  /**
   */
  deleteEntry = (key: Key): Response<void> => {
    return this.httpClient.delete(this.relativePath(key))
  }

  /**
   * List designers of the brand
   */
  listDesigners = (key: Key): Response<PageResult<Member>> => {
    return this.httpClient.get(this.relativePath(key, '/teams/designer/members'))
  }
}

