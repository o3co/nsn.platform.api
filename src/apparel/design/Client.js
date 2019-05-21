/* @flow strict */
/**
 */
import {
  BaseClient,
  type PageResult,
  type Response,
  type SizeFamilyKey,
  type SizeKey,
} from '../core'

import type {
  Attachment,
  BrandKey,
  CategoryKey,
  ColorPattern,
  Cost,
  DesignerId,
  EntryState,
  EntryStateList,
  GenderTarget,
  Id,
  Image,
  Key,
  Measurement,
  Name,
  Price,
  ProviderId,
  Quantity,
  // Models
  Entry,
  Snapshot,
  IndexedSnapshot,
} from './types'

const debug = require('debug')('platform:apparel:design:Client')

/**
 * EntryState
 */
export type ListOption = {
  condition?: {
    key?: Key,
    state?: EntryStateList,
    designer?: DesignerId,
  }
}

/**
 */
export type OrderParams = {
  quantity: Quantity,
}

export type RegisterParams = {
  brand: BrandKey,
  designer: DesignerId,
  provider?: ProviderId,
  name?: Name,
  cost?: Cost,
  price?: Price,
  genderTarget?: GenderTarget,
  category?: CategoryKey,
  patterns?: Array<ColorPattern>,
  sizeFamily?: SizeFamilyKey,
  sizes?: Array<SizeKey>,
  comment?: Comment,
  measurements?: Array<Measurement>,
  attachments?: Array<Attachment>,
  images?: Array<Image>,
}

/**
 */
export type UpdateParams = {
  key: ?string,
}

export type ProductizeParams = {}

export type ArchiveParams = {}

export type UnarchiveParams = {}

/**
 *
 */
export class Client extends BaseClient {
  /**
   */
  get basepath() {
    return '/apparel/designs'
  }

  options(params: any = {}) {
    debug('option parameters', params)
    return {
      headers: {
        'X-BRAND':   params.brand,
      }
    }
  }

  /**
   *
   */
  list(brand: BrandKey, size: number = 10, offset: number = 0, opt: ListOption = {}): Response<PageResult<IndexedSnapshot>> {
    const condition = {
      ...opt.condition,
    }
    return this.httpClient.get(this.relativePath(), {
      ...this.options({ brand }),
      params: {
        size,
        offset,
        ...condition,
      }
    })
  }

  /**
   *
   */
  describe(brand: BrandKey, id: Id): Response<Snapshot> {
    return this.httpClient.get(this.relativePath(id), this.options({ brand }))
  }

  /**
   *
   */
  register(brand: BrandKey, entry: RegisterParams): Response<Entry> {
    return this.httpClient.post(this.relativePath(), entry, this.options({ brand }))
  }

  /**
   *
   */
  update(brand: BrandKey, id: Id, params: UpdateParams): Response<Entry> {
    return this.httpClient.post(this.relativePath(id), params, this.options({ brand }))
  }

  /**
   *
   */
  archive(brand: BrandKey, id: Id, params: ArchiveParams = {}): Response<void> {
    return this.httpClient.post(this.relativePath(id, 'archive'), params, this.options({ brand }))
  }

  /**
   *
   */
  unarchive(brand: BrandKey, id: Id, params: UnarchiveParams = {}): Response<void> {
    return this.httpClient.post(this.relativePath(id, 'unarchive'), params, this.options({ brand }))
  }

  /**
   * Order sample
   */
  order(brand: BrandKey, id: Id, params: OrderParams): Response<void> {
    return this.httpClient.post(this.relativePath(id, 'order'), params, this.options({ brand }))
  }

  /**
   *
   */
  productize(brand: BrandKey, id: Id, params: ProductizeParams = {}): Response<void> {
    return this.httpClient.post(this.relativePath(id, 'productize'), params, this.options({ brand }))
  }
}

