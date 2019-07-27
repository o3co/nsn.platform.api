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

import {
  Client as LineClient,
} from './line'

/**
 */
export type RegisterParams = {
}

/**
 */
export type ApproveParams = {
}

/**
 */
export type RejectParams = {
}

export type Options = {
  brandName?: string
}

/**
 */
export type ListOptions = Options & {
  brandName?: string,
  filter: {
    provider?: string,
    groupName?: string,
  }
}

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
    return '/order/requests'
  }

  get lines() {
    this.lineClient = new LineClient(this.params)
    return this.lineClient
  }

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

  /**
   * Describe entry
   */
  describe = (id: ID, opts: Options = {}): Response<Entry> => {
    return this.httpClient.get(this.relativePath(id), {
      headers: this.headersFromOptions(opts),
    })
  }

  /**
   */
  register = (params: RegisterParams, opts: Options = {}): Response<Entry> => {
    return this.httpClient.post(this.relativePath(), params, {
      headers: this.headersFromOptions(opts),
    })
  }

//  /**
//   */
//  approve = (id: ID, params: ApproveParams = {}, opts: Options = {}): Response<Entry> => {
//    return this.httpClient.post(this.relativePath(id, 'approve'), params, {
//      headers: this.headersFromOptions(opts),
//    })
//  }
//
//  /**
//   */
//  reject = (id: ID, params: RejectParams = {}, opts: Options = {}): Response<Entry> => {
//    return this.httpClient.post(this.relativePath(id, 'reject'), params, {
//      headers: this.headersFromOptions(opts),
//    })
//  }
}

