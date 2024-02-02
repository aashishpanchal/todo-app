import type {AxiosError} from "axios";

export type ApiRes<T> = {
  statusCode: number;
  message: string;
  data: T;
};

export type ApiError = AxiosError<{
  statusCode: number;
  message: string;
  error: string;
}>;
