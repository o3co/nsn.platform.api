/* @flow strict */

/**
 */
export type Key = string

/**
 */
export type Label = string

/**
 */
export type Category = {
  key: Key,
  label: Label
}

/**
 */
type BaseNode = Category;

/**
 */
export type Node = BaseNode & {
  parentPath?: Key,
  subCategories: {[Key]: Label},
}

