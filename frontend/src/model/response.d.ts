type RequestResponse<T1 = any, T2 = any> =
  | RequestSuccessResponse<T1>
  | RequestFailureResponse<T2>;

interface RequestSuccessResponse<T> {
  code: "OK";
  content: T;
  message: string;
}

interface RequestFailureResponse<T> {
  code: "FAILURE";
  content: T;
  message: string;
}

type RequesterResponse<T1 = any, T2 = any> =
  | RequesterSuccessResponse<T1>
  | RequesterFailureResponse<T2>;

interface RequesterSuccessResponse<T> {
  isSuccess: true;
  data: T;
}

interface RequesterFailureResponse<T> {
  isSuccess: false;
  data: Nullable<T>;
  message: string;
}
