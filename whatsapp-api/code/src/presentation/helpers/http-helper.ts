import { HttpResponse } from '../protocols/http'
import { ServerError } from '../errors/server-error'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const successRequest = (payload: any):HttpResponse => ({
  statusCode: 200,
  body: payload
})

export const successCreatedRequest = (payload: any):HttpResponse => ({
  statusCode: 201,
  body: payload
})

export const serverError = ():HttpResponse => ({
  statusCode: 500,
  body: new ServerError()
})
