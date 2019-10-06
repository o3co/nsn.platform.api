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

const DefaultOptions: Options = {
}

const DefaultListOptions: ListOptions = {
  ...DefaultOptions,
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
    return this.httpClient.get(this.path(), {
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
    return this.httpClient.get(this.path(id), {
      headers: this.headersFromOptions(opts),
    })
  }

  /**
   */
  register = (params: RegisterParams, opts: Options = {}): Response<Entry> => {
    return this.httpClient.post(this.path(), params, {
      headers: this.headersFromOptions(opts),
    })
  }

//  /**
//   */
//  approve = (id: ID, params: ApproveParams = {}, opts: Options = {}): Response<Entry> => {
//    return this.httpClient.post(this.path(id, 'approve'), params, {
//      headers: this.headersFromOptions(opts),
//    })
//  }
//
//  /**
//   */
//  reject = (id: ID, params: RejectParams = {}, opts: Options = {}): Response<Entry> => {
//    return this.httpClient.post(this.path(id, 'reject'), params, {
//      headers: this.headersFromOptions(opts),
//    })
//  }
}

