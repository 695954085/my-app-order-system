interface LoginByUserNameType {
  isFetching: boolean;
  userName?: string;
  error?: string;
}

interface ReducerType {
  loginByUserName: LoginByUserNameType
}