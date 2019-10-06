/* @flow strict */

import {
  BaseClient,
  type Response,
  type PageResult,
  type FetchSize,
  type FetchOffset,
} from '../../core'

import type {
  ID,
  IndexedEntry, 
  Entry,
} from './types'

export class Client extends BaseClient {

  get basepath() {
    return '/ims/containers'
  }

  /**
   */
  list = (size: FetchSize = 10, offset: FetchOffset = 0): Response<PageResult<IndexedEntry>> => {
    return this.httpClient.get(this.path(), {
      params: {
        size,
        offset,
      },
    })
  }

  /**
   */
  describe = (id: ID): Response<Entry> => {
    return this.httpClient.get(this.path(id))
  }
}

