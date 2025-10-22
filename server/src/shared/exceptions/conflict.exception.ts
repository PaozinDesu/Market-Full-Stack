export class ConflicException {
  statusCode = 409;
  message: string;

  constructor(message: string) {
    this.message = message;
  }
}
