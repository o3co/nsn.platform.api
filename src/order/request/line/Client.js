/* @flow strict */

import {
  BaseClient,
  type Response,
  type PageResult,
} from 'core'

import type {
  ID,
  //
  Index,
  Entry,
} from './types'

/**
 */
export type Options = {
  brandName?: string
}

const DefaultOptions = {
}

/**
 */
export type ListOptions = Options & {
  brandName?: string,
  filter: {
    line?: string,
  }
}

/**
 */
const DefaultListOptions: ListOptions = {
  ...DefaultOptions,
  filter: {
  },
}

/**
 *
 * @class
 */
export class Client extends BaseClient {
  /**
   */
  get basepath(): string {
    return '/order/request/lines'
  }

  /**
   */
  headersFromOptions = (opts: Options = {}) => {
    const formattedOptions = {
      ...DefaultOptions,
      ...opts,
    }

    let headers = {}

    if(formattedOptions.brandName)
      headers['X-GROUP-NAME']  = `brand.${formattedOptions.brandName}`

    return headers
  }

  /**
   * List entries
   */
  list = (size: number = 10, offset: number = 0, opts: ListOptions = DefaultListOptions): Response<PageResult<Index>> => {
    return this.httpClient.get(this.relativePath(), {
      params: {
        ...opts.filter,
        size,
        offset,
      },
      headers: this.headersFromOptions(opts),
    })
  }
}

