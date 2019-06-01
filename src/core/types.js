/* @flow strict */

import {
  type AxiosPromise,
} from 'axios'

/**
 */
export type UUID = string

/**
 * typedef Instant
 */
export type Instant = string

/**
 */
export type PageResult<T> = {
  data: Array<T>,
  total: number,
  requestSize?: number,
  size: number,
  offset: number,
}

/**
 */
export type Response<T> = AxiosPromise<T>

/**
 */
export type Collection<T> = {
  data: Array<T>,
  total: number,
  requestSize: number,
  offset: number,
}
