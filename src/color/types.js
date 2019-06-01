/* @flow strict */

/**
 */
export type Name = string

/**
 */
export type Label = string

/**
 * #rrggbb
 */
export type RGB = string

// MODELs
/**
 */
export type Color = {
  name: Name,
  label: Label,
  rgb: RGB
}

/**
 */
type BaseEntry = Color

/**
 */
export type Entry = BaseEntry & {}

/**
 */
export type IndexedEntry = BaseEntry & {}
