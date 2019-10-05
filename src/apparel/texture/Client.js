/* @flow strict */

import {
  BaseClient,
  type Response,
  type PageResult,
} from '../../core'

import type {
  Name,
  Entry,
  IndexedEntry, 
} from './types'

/**
 */
export type RegisterParams = {}

/**
 */
export type UpdateParams = {}

/**
 */
export type Options = {}

/**
 */
export class Client extends BaseClient {
  /**
   */
  get basepath() {
    return '/apparel/textures'
  }

  /**
   */
  listEntries = (size: number = 10, offset: number = 0): Response<PageResult<IndexedEntry>> => {
    return this.httpClient.get(this.relativePath(), {
      params: {
        size,
        offset,
      },
    })
  }

  /**
   */
  describeEntry = (name: Name): Response<Entry> => {
    return this.httpClient.get(this.relativePath(name))
  }

  /**
   */
  registerEntry = (params: RegisterParams) => {
    return this.httpClient.post(this.relativePath(params.name), params)
  }

  /**
   */
  updateEntry = (name: Name, params: UpdateParams) => {
    return this.httpClient.post(this.relativePath(name), params)
  }

  /**
   */
  deleteEntry = (name: Name) => {
    return this.httpClient.delete(this.relativePath(name))
  }
}

