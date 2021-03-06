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
  path = (pathString: string = '', args = {}): string => {
    return pathToRegexp.compile(path.join(this.basepath, pathString))(args)
  }

  /**
   */
  constructor(params: ConstructParams = {}) {
    this.params = params

    this.init()
  }

  init = () => {
    if(this.params.httpClient && (this.params.httpClient instanceof Axios)) {
      this.httpClient = this.params.httpClient
    } else {
      this.httpClient = axios.create(this.params.httpClient)
    }

    this.httpClient.interceptors.response.use(
      (response) => response,
      (error) => {
        // eslint-disable-next-line no-console
        console.log(`ERROR: (res = ${String(JSON.stringify(error.response))}, status = ${error.response ? error.response.status : ''} )`)
        // eslint-disable-next-line no-console
        console.log(`ERROR: ${ JSON.stringify(error.message) }`)

        if(error.response && (401 == error.response.status)) {
          return Promise.reject(new AuthenticationError(error))
        } else {
          return Promise.reject(error)
        }
      }
    )
  }
}

