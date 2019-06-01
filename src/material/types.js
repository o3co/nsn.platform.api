/* @flow strict */

/**
 */
export type Name = string

/**
 */
export type Label = string

/**
 */
export type Ratio = number;

/**
 */
type BaseEntry = {
  name: Name,
  label: Label,
}

/**
 */
export type Entry = BaseEntry & {
}

/**
 */
export type IndexedEntry = BaseEntry & {
}
