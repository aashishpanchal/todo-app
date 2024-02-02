/**
 * Http Json Response Class
 */
export class HttpRes {
  declare data: any;
  declare message: string;
  declare statusCode: number;

  constructor(
    data: any = {},
    status: number = 200,
    message: string = "Success"
  ) {
    this.statusCode = status;
    this.message = message;
    this.data = data;
  }
}
