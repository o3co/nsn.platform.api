/* @flow strict */
import {
  BaseClient,
  type Response,
  type PageResult,
} from '../../core'

import type {
  Name,
  Entry,
  IndexedEntry,
} from './types'

/**
 */
export class Client extends BaseClient {
  /**
   */
  get basepath() {
    return '/apparel/patterns'
  }
 
  /**
   */
  listEntries = (size: number = 10, offset: number = 0): Response<PageResult<IndexedEntry>> => {
    return this.httpClient.get(this.relativePath(), {
      params: {
        size,
        offset,
      }
    })
  }

  /**
   */
  describeEntry = (name: Name): Response<Entry> => {
    return this.httpClient.get(this.relativePath(name))
  }
}

