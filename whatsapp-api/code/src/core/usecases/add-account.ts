export interface AddAccountModel {
  name: string
  email: string
  password: string
}

export interface AddAcount {
  handle(account: AddAccountModel): AddAccountModel
}
