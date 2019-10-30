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

/**
 */
export type CreateParams = {
  title: Title,
}

/**
 */
export type UpdateParams = {
  title: Title,
}

/**
 *
 * @class
 */
export class Client extends BaseClient {

  get basepath() {
    return '/ec/exhibitions'
  }

  /**
   * List brand entries
   */
  listEntries = (size: number = 10, offset: number = 0): Response<PageResult<Entry>> => {
    return this.httpClient.get(this.path(), {
      params: {
        size,
        offset,
      },
    })
  }

  /**
   * Describe the brand entry
   */
  describeEntry = (id: ID): Response<Entry> => {
    return this.httpClient.get(this.path(id))
  }

  /**
   */
  createEntry = (params: CreateParams): Response<Entry> => {
    return this.httpClient.post(this.path(), params)
  }

  /**
   */
  updateEntry = (id: ID, params: UpdateParams): Response<void> => {
    return this.httpClient.post(this.path(id), params)
  }

  /**
   */
  deleteEntry = (id: ID): Response<void> => {
    return this.httpClient.delete(this.path(id))
  }
}

