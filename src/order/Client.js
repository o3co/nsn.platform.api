/* @flow strict */

import {
  BaseClient,
  type Response,
  type PageResult,
} from 'core'

import type {
  Id,
  //
  IndexedEntry,
  Entry,
} from './types'

import {
  Client as LineClient,
} from './line/Client'

import {
  Client as RequestClient,
} from './request/Client'

/**
 */
export type RegisterParams = {
}

/**
 */
export type ApproveParams = {
}

/**
 */
export type RejectParams = {
}

export type Options = {
  groupName?: string
}

/**
 */
export type ListOptions = Options & {
}

const defaultListOptions: ListOptions = {
}

/**
 *
 * @class
 */
export class Client extends BaseClient {

  //constructor(params: ConstructParams = {}) {
  //  super(params)
  //}

  get lines() {
    this.lineClient = new LineClient(this.params)
    return this.lineClient
  }

  get requests() {
    this.requestClient = new RequestClient(this.params)
    return this.requestClient
  }

  listLines = this.lines.list
}

