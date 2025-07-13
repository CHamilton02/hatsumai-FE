export class EmailDoesNotExistError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'EmailDoesNotExistError'
    Object.setPrototypeOf(this, EmailDoesNotExistError.prototype)
  }
}

export class ExistingPasswordResetRequest extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ExistingPasswordResetRequest'
    Object.setPrototypeOf(this, ExistingPasswordResetRequest.prototype)
  }
}
