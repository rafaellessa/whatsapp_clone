import { AddAcount, AddAccountModel } from '../../core/usecases/add-account'
import { EmailValidator } from '../protocols/email-validator'

export class AddAccountStub implements AddAcount {
  handle (account: AddAccountModel): AddAccountModel {
    const fakeAccount: AddAccountModel = {
      name: 'valid_name',
      email: 'valid_email@email.com',
      password: 'valid_password'
    }

    return fakeAccount
  }
}

export class EmailValidatorStub implements EmailValidator {
  isValid (email: string) {
    return true
  }
}
