/* @flow strict */

import {
  BaseClient,
  type Response,
  type PageResult,
} from '../../core'

import type {
  LineID,
  //
  Index,
  Entry,
} from './types'

/**
 */
export type Options = {
  groupName?: string
}

/**
 */
export type ListOptions = Options & {
}

export type RegisterParams = {
}

export type ResolveParams = {
  provider: string,
  groupName: string,
  createIfNotExists?: boolean,
}

/**
 */
const DefaultOptions: Options = {
}

/**
 */
const DefaultListOptions: ListOptions = {
}

/**
 *
 * @class
 */
export class Client extends BaseClient {
  /**
   */
  get basepath(): string {
    return '/order/lines'
  }

  headersFromOptions = (opts: Options) => {
    const formattedOptions = {
      ...DefaultOptions,
      ...opts,
    }

    let headers = {}

    if(formattedOptions.brandName)
      headers['X-GROUP-NAME']  = formattedOptions.brandName

    return headers
  }

  /**
   * List entries
   */
  listEntries = (size: number = 10, offset: number = 0, opts: ListOptions = DefaultListOptions): Response<PageResult<Index>> => {
    return this.httpClient.get(this.path(), {
      params: {
        size,
        offset,
      },
      headers: this.headersFromOptions(opts),
    })
  }

  /**
   * Describe entry
   */
  describeEntry = (id: LineID, opts: Options = {}): Response<Entry> => {
    return this.httpClient.get(this.path(id), {
      headers: this.headersFromOptions(opts),
    })
  }

  resolve = (params: ResolveParams, opts: Options = DefaultOptions) => {
    if(!params.provider) throw new Error('provider has to be specified.')
    if(!params.groupName) throw new Error('groupName has to be specified.')

    return this.httpClient.get(this.path('/resolve'), {
      params: {
        ...params,
      },
      headers: this.headersFromOptions(opts),
    })
  }

  /**
   * Register Line 
   */
  register = (params: RegisterParams, opts: Options = {}): Response<Entry> => {
    return this.httpClient.post(this.path(), params, {
      headers: this.headersFromOptions(opts),
    })
  }
}

