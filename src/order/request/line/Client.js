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
const defaultListOptions: ListOptions = {
  filter: {},
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
  headersFromOptions = (opts: Options) => {
    return {
      'X-GROUP-NAME': opts.brandName ? `brand.${ opts.brandName }` : null,
    }
  }

  /**
   * List entries
   */
  list = (size: number = 10, offset: number = 0, opts: ListOptions = defaultListOptions): Response<PageResult<Index>> => {
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

