interface LoginPropTypes {
  onSubmit: (params: LoginParams) => void;
  isFetching: boolean;
  error?: string;
}