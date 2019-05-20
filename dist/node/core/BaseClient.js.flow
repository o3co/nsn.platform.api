/* @flow strict */

import axios, {
  Axios,
  type $AxiosXHRConfigBase as AxiosXHRConfigBase,
} from 'axios'

import path from 'path'

import {
  AuthenticationError,
} from './errors'

/**
 */
export type ConstructParams = {
  httpClient?:   Axios | AxiosXHRConfigBase<any, any>,
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
   */
  relativePath(...args: Array<string>): string {
    const paths = Array.prototype.slice.apply(args)
    if(this.basepath) {
      paths.unshift(this.basepath)
    }
    return path.join.apply(null, paths)
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
        const res = JSON.stringify(error.response) || 'undefined'
        // eslint-disable-next-line no-console
        console.log(`ERROR: (res = ${res}, status = ${error.response ? error.response.status : ''} )`)
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

