/* @flow strict */

import type {
  UUID,
  Instant,
} from '../core'

/**
 */
export type Id = UUID

/**
 */
export type State = string 

/**
 */
export type Title = string

/**
 */
export type Line = {}

/**
 */
type Base = {
  id: Id,
}

/**
 */
type BaseEntry = Base & {
  orderedAt: Instant,
  operator: UUID,
  title: Title,
  state: State,
  orderType: string,
  note: string,
}

/**
 */
export type Entry = BaseEntry & {
  lines: Array<Line>
}

/**
 */
export type IndexedEntry = BaseEntry & {
}
