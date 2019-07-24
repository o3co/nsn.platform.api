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

export type Options = {}

/**
 */
export type ListOptions = Options & {
  groupName?: string
}

const defaultListOptions: ListOptions = {
}

/**
 *
 * @class
 */
export class Client extends BaseClient {
  /**
   */
  get basepath(): string {
    return '/orders'
  }

  headersFromOptions = (opts: Options) => {
    return {
      'X-GROUP-NAME': opts.groupName,
    }
  }

  /**
   * List entries
   */
  list = (size: number = 10, offset: number = 0, opts: ListOptions = defaultListOptions): Response<PageResult<IndexedEntry>> => {
    return this.httpClient.get(this.relativePath(), {
      params: {
        ...opts,
        size,
        offset,
      },
      headers: this.headersFromOptions(opts),
    })
  }

  /**
   * Describe entry
   */
  describe = (id: Id, opts: Options = {}): Response<Entry> => {
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

  /**
   */
  approve = (id: Id, params: ApproveParams = {}, opts: Options = {}): Response<Entry> => {
    return this.httpClient.post(this.relativePath(id, 'approve'), params, {
      headers: this.headersFromOptions(opts),
    })
  }

  /**
   */
  reject = (id: Id, params: RejectParams = {}, opts: Options = {}): Response<Entry> => {
    return this.httpClient.post(this.relativePath(id, 'reject'), params, {
      headers: this.headersFromOptions(opts),
    })
  }
}

