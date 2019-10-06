/* @flow */

import axios, {
  Axios,
  type $AxiosXHRConfigBase as AxiosXHRConfigBase,
} from 'axios'

import path from 'path'

//import pathToRegexp from 'path-to-regexp'

import {
  AuthenticationError,
} from './errors'

const pathToRegexp = require('path-to-regexp')
/**
 */
export type ConstructParams = {
  httpClient?: Axios | AxiosXHRConfigBase<any, any>,
}

/**
 */
export class BaseClient {
  /**
   */
  params: ConstructParams

  /**
   */
  httpClient: Axios

  /**
   */
  get basepath(): string {
    return ''
  }

  /**
   * @deprecated use path instead
   */
  relativePath = (...args: Array<string>): string => {
    const paths = Array.prototype.slice.apply(args)
    if(this.basepath) {
      //paths.unshift(pathToRegexp(this.basepath, opts))
      paths.unshift(this.basepath)
    }
    return path.join.apply(null, paths)
  }

  /**
   */
  path = (path: string = '', args = {}): string => {
    return pathToRegexp(path.join(this.basepath, path), args)
  }

  /**
   */
  constructor(params: ConstructParams = {}) {
    this.params = params
    if(params.httpClient && (params.httpClient instanceof Axios)) {
      this.httpClient = params.httpClient
    } else {
      this.httpClient = axios.create(params.httpClient)
    }

    this.httpClient.interceptors.response.use(
      (response) => response,
      (error) => {
        // eslint-disable-next-line no-console
        console.log(`ERROR: (res = ${String(JSON.stringify(error.response))}, status = ${error.response ? error.response.status : ''} )`)
        const err = JSON.stringify(error.message) || ''
        // eslint-disable-next-line no-console
        console.log(`ERROR: ${err}`)

        if(error.response && (401 == error.response.status)) {
          return Promise.reject(new AuthenticationError(error))
        } else {
          return Promise.reject(error)
        }
      }
    )
  }
}

