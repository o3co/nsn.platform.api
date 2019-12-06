/* @flow strict */
import {
  BaseClient,
  type Response,
  type PageResult,
} from '../../core'

/**
 *
 * @class
 */
export class Client extends BaseClient {

  get basepath() {
    return '/brands/:brand/teams/designer/members'
  }

  /**
   */
  listEntries = (brand: BrandName, size: number = 10, offset: number = 0): Response<PageResult<IndexedEntry>> => {
    return this.httpClient.get(this.path('/members', { brand }), {
      params: {
        size,
        offset,
      },
    })
  }
}

