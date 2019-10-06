/* @flow strict */
import {
  BaseClient,
  type Response,
  type PageResult,
} from '../core'

import type {
  Name,
  Entry,
  IndexedEntry,
} from './types'

/**
 *
 */
export class Client extends BaseClient {
  /**
   */
  get basepath() {
    return '/colors'
  }

  /**
   */
  listEntries = (): Response<PageResult<IndexedEntry>> => {
    return this.httpClient.get(this.path())
  }

  /**
   */
  describeEntry = (name: Name): Response<Entry> => {
    return this.httpClient.get(this.path(name))
  }
}
