import httpStatus from "http-status";
import {HttpRes} from "./http.res";
import type {Schema} from "zod";

export class ApiRes {
  // serializer data
  static serializer(dto: Schema, data: any) {
    if (dto && data) {
      const value = dto.safeParse(data);
      return value.success ? value.data : null;
    }
    return data;
  }

  // ok response
  static Ok(data: any, message?: string, dto?: Schema) {
    return new HttpRes(this.serializer(dto, data), httpStatus.OK, message);
  }

  // created response
  static Created(data: any, message?: string, dto?: Schema) {
    return new HttpRes(this.serializer(dto, data), httpStatus.CREATED, message);
  }
}
