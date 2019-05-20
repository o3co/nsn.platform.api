/* @flow strict */
import {
  Client,
  type ListOption,
  type OrderParams,
  type RegisterParams,
  type UpdateParams,
  type ProductizeParams,
  type ArchiveParams,
  type UnarchiveParams,
} from './Client'

/**
 */
import {
  type PageResult,
  type Response,
  type SizeFamilyKey,
  type SizeKey,
  type ConstructParams as BaseConstructParams,
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

export type ConstructParams = {
  brand: BrandKey,
  baseClient: Client,
} & BaseConstructParams

/**
 *
 */
export class ScopedClient {
  /**
   */
  params: ConstructParams
  
  /**
   */
  baseClient: Client

  /**
   */
  get brand(): BrandKey {
    return this.params.brand
  }

  /**
   */
  constructor(params: ConstructParams) {
    this.params = params
    this.baseClient = params.baseClient ? params.baseClient : new Client(params)
  }

  /**
   *
   */
  list(size: number = 10, offset: number = 0, opt: ListOption = {}): Response<PageResult<IndexedSnapshot>> {
    return this.baseClient.list(this.brand, size, offset, opt)
  }

  /**
   *
   */
  describe(id: Id): Response<Snapshot> {
    return this.baseClient.describe(this.brand, id)
  }

  /**
   *
   */
  register(entry: RegisterParams): Response<Entry> {
    return this.baseClient.register(this.brand, entry)
  }

  /**
   *
   */
  update(id: Id, params: UpdateParams): Response<Entry> {
    return this.baseClient.update(this.brand, id, params)
  }

  /**
   *
   */
  archive(id: Id, params: ArchiveParams = {}): Response<void> {
    return this.baseClient.archive(this.brand, id, params)
  }

  /**
   *
   */
  unarchive(id: Id, params: UnarchiveParams = {}): Response<void> {
    return this.baseClient.unarchive(this.brand, id, params)
  }

  /**
   * Order sample
   */
  order(id: Id, params: OrderParams): Response<void> {
    return this.baseClient.order(this.brand, id, params)
  }

  /**
   *
   */
  productize(id: Id, params: ProductizeParams = {}): Response<void> {
    return this.baseClient.productize(this.brand, id, params)
  }
}

