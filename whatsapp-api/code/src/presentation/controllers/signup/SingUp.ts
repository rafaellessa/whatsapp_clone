import { AddAcount } from '../../../core/usecases/add-account'
import { Controller, EmailValidator, HttpRequest, HttpResponse } from '../../protocols'

import { badRequest, serverError, successCreatedRequest } from '../../helpers/http-helper'
import { InvalidParamError, MissingParamError } from '../../errors'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly addAccount: AddAcount
  constructor (emailValidator: EmailValidator, addAccount: AddAcount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFields = [
        'name',
        'email',
        'password',
        'passwordConfirmation'
      ]

      const { name, email, password, passwordConfirmation } = httpRequest.body

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      if (!this.emailValidator.isValid(email)) {
        return badRequest(new InvalidParamError('email'))
      }

      this.addAccount.handle({ name, email, password })

      return successCreatedRequest(httpRequest.body)
    } catch (error) {
      return serverError()
    }
  }
}
