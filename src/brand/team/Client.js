/* @flow strict */
import {
  BaseClient,
  type Response,
  type PageResult,
} from '../../core'

import pathToRegexp from 'path-to-regexp'

/**
 *
 * @class
 */
export class BrandScopedClient extends BaseClient {

  get basepath() {
    return pathToRegexp('/brands/:brand/teams')
  }

  /**
   * List brand entries
   */
  listMembers = (brand: BrandName, size: number = 10, offset: number = 0): Response<PageResult<IndexedEntry>> => {
    return this.httpClient.get(this.path('/members', { brand }), {
      params: {
        size,
        offset,
      },
    })
  }
}

