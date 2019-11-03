/* @flow strict */

import {
  BaseClient,
  type Response,
  type PageResult,
  type URL,
} from '../../core'

import type {
  Key,
  //
  Entry,
} from './types'

/**
 */
export type CreateParams = {
  name: Name,
  uniqueName: Key,
  url: URL,
}

/**
 */
export type UpdateParams = {
}

/**
 *
 * @class
 */
export class Client extends BaseClient {
  
  static DefaultOptions = {
  }

  get basepath() {
    return '/ec/malls'
  }

  /**
   * Create options from params
   */
  httpOptions = (opts: any = {}) => {
    const params = {
      ...this.DefaultOptions,
      ...params,
    }

    return {
      headers: {
        'X-BRAND': params.brand,
      },
    }
  }

  /**
   * List brand entries
   */
  listEntries = (size: number = 10, offset: number = 0, opts: Options = {}): Response<PageResult<Entry>> => {
    return this.httpClient.get(this.path(), {
      ...this.httpOptions(opts),
      params: {
        size,
        offset,
      },
    })
  }

  /**
   * Describe the brand entry
   */
  describeEntry = (key: Key, opts: Options = {}): Response<Entry> => {
    return this.httpClient.get(this.path(key), this.httpOptions(opts))
  }

  /**
   */
  createEntry = (params: CreateParams, opts: Options = {}): Response<Entry> => {
    return this.httpClient.post(this.path(), params, this.httpOptions(opts))
  }

  /**
   */
  updateEntry = (key: Key, params: UpdateParams, opts: Options = {}): Response<void> => {
    return this.httpClient.post(this.path(key), params, this.httpOptions(opts))
  }

  /**
   */
  deleteEntry = (key: Key, opts: Options = {}): Response<void> => {
    return this.httpClient.delete(this.path(key), this.httpOptions(opts))
  }
}

