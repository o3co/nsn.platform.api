/* @flow strict */

import {
  type $AxiosError as AxiosError,
} from 'axios'

/**
 */
export class AuthenticationError extends Error {
  error: AxiosError<any> 

  name: string

  request: ?(FlowHttpClientRequest<> | FlowXMLHttpRequest)

  constructor(error: AxiosError<any>) {
    // eslint-disable-next-line no-underscore-dangle
    super(`Authentication Fault: ${ error.code ? error.code : ''} : ${ error.message } : ${ (error.request: any)._header }`)
    this.error   = error 
    this.request = error.request 

    this.name = this.constructor.name
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor)
    } else { 
      this.stack = (new Error(this.message)).stack 
    }
  }

  get errorCode(): string {
    return this.error.code ? this.error.code : ''
  }
}
