interface LoginByUserNameType {
  isFetching: boolean;
  token?: string;
  userName?: string;
  error?: string;
  remember?: boolean;
}

interface ReducerType {
  loginByUserName: LoginByUserNameType
}