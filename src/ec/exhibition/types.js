/* @flow strict */

import {
  type UUID,
} from '../../core'

/**
 */
export type ID = UUID

/**
 * Title 
 */
export type Title = string

/**
 */
export type State = "active"

export type Version = number

export type ProductID = UUID

export type ShopID = UUID

export type SKUKey = string

export type VariationTitle = string

export type VariationKey = string

export type ColorLabel = string

export type SizeLabel = string

export type Price = number

export type VariationEntry = {
  key: VariationKey,
  sku: SKUKey,
  title: VariationTitle,
  color: ColorLabel,
  size: SizeLabel,
  price: Price,
}

/**
 *
 */
type Base = {
  id: Id,
}

/**
 */
export type BaseEntry = Base & {}

/**
 */
export type Entry = BaseEntry & {
  title: Title,
  product: ProductID,
  shop: ShopID,
  version: Version,
  state: State,
  registeredAt: DateTime,
  versionedAt: DateTime,
  variations: Array<VariationEntry>
}
