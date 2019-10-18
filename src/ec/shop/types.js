/* @flow strict */

import {
  type UUID,
} from '../../core'

export type ID = UUID
/**
 * Unique Key
 */
export type Key = string

/**
 * Name 
 */
export type Name = string

/**
 */
export type State = "active" | "deleted"

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
  name: Name,
  uniqueName: Key,
  state: State,
  createdAt: string,
  updatedAt: string,
}

