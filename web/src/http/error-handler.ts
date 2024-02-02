import type {ApiError} from "@/types/api.type";

// handle error from server
export const ApiErrorHandler = (msg: string) => (props: ApiError) => {
  const {response} = props;
  if (response && response.status >= 400) return response.data?.message;
  return msg;
};
