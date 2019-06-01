/* @flow strict */

/**
 * Designer Id
 */
export type Id = string

/**
 * Designer Name
 */
export type Name = string

/**
 */
type BaseEntry = {
  id: Id,
  name: Name,
}

/**
 * Entry Model
 */
export type Entry = BaseEntry & {
}

/**
 * Entry Index Model
 */
export type IndexedEntry = BaseEntry & {
}

