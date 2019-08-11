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
export class Client extends BaseClient {
  /**
   */
  get basepath() {
    return '/products'
  }

  /**
   *
   */
  listEntries = (size: number = 10, offset: number = 0): Response<PageResult<IndexedEntry>> => {
    return this.httpClient.get(this.relativePath(), {
      params: {
        size,
        offset,
      },
    })
  }

  /**
   */
  describeEntry = (id: Id): Response<Entry> => {
    return this.httpClient.get(this.relativePath(id))
  }
}
