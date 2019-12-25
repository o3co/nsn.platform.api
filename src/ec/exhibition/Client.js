/* @flow strict */

import {
  BaseClient,
  type Response,
  type PageResult,
  type URL,
} from '../../core'

import type {
  ID,
  //
  Entry,
} from './types'

export type Options = {
  brand: BrandKey,
  shop: ShopID,
}

/**
 */
export type CreateParams = {
  title: Title,
}

/**
 */
export type UpdateParams = {
  title?: Title,
}

/**
 *
 * @class
 */
export class Client extends BaseClient {

  static DefaultOptions = {
  }

  get basepath() {
    return '/ec/exhibitions'
  }

  /**
   * Create options from params
   */
  httpOptions = (opts: any = {}) => {
    const params = {
      ...this.DefaultOptions,
      ...opts,
    }

    return {
      headers: {
        'X-BRAND': opts.brand,
        'X-SHOP-ID': opts.shop,
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
  describeEntry = (id: ID, opts: Options = {}): Response<Entry> => {
    return this.httpClient.get(this.path(id), this.httpOptions(opts))
  }

  /**
   */
  createEntry = (params: CreateParams, opts: Options = {}): Response<Entry> => {
    return this.httpClient.post(this.path(), params, this.httpOptions(opts))
  }

  /**
   */
  updateEntry = (id: ID, params: UpdateParams, opts: Options = {}): Response<void> => {
    return this.httpClient.post(this.path(id), params, this.httpOptions(opts))
  }

  /**
   */
  deleteEntry = (id: ID, opts: Options = {}): Response<void> => {
    return this.httpClient.delete(this.path(id), this.httpOptions(opts))
  }
}

