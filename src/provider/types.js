/* @flow strict */
import type {
  Instant,
  UUID,
} from '../core'

/**
 */
export type Id = UUID 

/**
 */
export type Name = string

/**
 */
export type ProviderType = "external" | "internal"

/**
 */
export type UniqueName = string

export type Label = string

/**
 *
 */
type Base = {
  id: Id,
  name: Name,
}

/**
 */
type BaseEntry = Base & {
  id: Id,
  uniqueName: UniqueName,
  label: Label,
  providerType: ProviderType,
  createdAt: Instant,
  updatedAt: Instant,
}

/**
 */
export type Entry = BaseEntry & {
}

/**
 */
export type IndexedEntry = BaseEntry & {
}

