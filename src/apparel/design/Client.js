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

type Options = {
  brand?: BrandKey,
}

/**
 * EntryState
 */
export type ListOption = Options & {
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

const DefaultOptions = {
}

const DefaultListOptions = {
  ...DefaultOptions,
  condition: {
  },
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

  /**
   * Create options from params
   */
  httpOptions = (params: any = {}) => {
    debug('option parameters', params)
    return {
      headers: {
        'X-BRAND': params.brand,
      },
    }
  }

  /**
   *
   */
  list = (size: number = 10, offset: number = 0, options: ListOption = {}): Response<PageResult<IndexedSnapshot>> => {
    const opts = {
      ...DefaultListOptions,
      ...options,
    }

    return this.httpClient.get(this.path(), {
      ...this.httpOptions(opts),
      params: {
        size,
        offset,
        ...opts.condition,
      },
    })
  }

  /**
   *
   */
  describe = (id: Id, options: Options = {}): Response<Snapshot> => {
    const opts = {
      ...DefaultOptions,
      ...options,
    }

    return this.httpClient.get(this.path(id), this.httpOptions(opts))
  }

  /**
   *
   */
  register = (entry: RegisterParams, options: Options = {}): Response<Entry> => {
    const opts = {
      ...DefaultOptions,
      ...options,
    }

    return this.httpClient.post(this.path(), entry, this.httpOptions(opts))
  }

  /**
   *
   */
  update = (id: Id, params: UpdateParams, options: Options = {}): Response<Entry> => {
    const opts = {
      ...DefaultOptions,
      ...options,
    }

    return this.httpClient.post(this.path(id), params, this.httpOptions(opts))
  }

  /**
   *
   */
  archive = (id: Id, params: ArchiveParams = {}, options: Options = {}): Response<void> => {
    const opts = {
      ...DefaultOptions,
      ...options,
    }

    return this.httpClient.post(this.path(`${id}/archive`), params, this.httpOptions(opts))
  }

  /**
   *
   */
  unarchive = (id: Id, params: UnarchiveParams = {}, options: Options = {}): Response<void> => {
    const opts = {
      ...DefaultOptions,
      ...options,
    }

    return this.httpClient.post(this.path(`${id}/unarchive`), params, this.httpOptions(opts))
  }

  /**
   * Order sample
   */
  order = (id: Id, params: OrderParams, options: Options = {}): Response<void> => {
    const opts = {
      ...DefaultOptions,
      ...options,
    }

    return this.httpClient.post(this.path(`${id}/order`), params, this.httpOptions(opts))
  }

  /**
   *
   */
  productize = (id: Id, params: ProductizeParams = {}, options: Options = {}): Response<void> => {
    const opts = {
      ...DefaultOptions,
      ...options,
    }

    return this.httpClient.post(this.path(`${id}/productize`), params, this.httpOptions(opts))
  }
}

