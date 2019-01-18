interface LoginParams {
  userName: string;
  password: string;
}

interface LoginContainerPropTypes {
  fetchLogin: (params: LoginParams) => void;
}

interface LoginContainerStateTypes {
  isFetching: boolean;
  error: string | undefined;
}

interface ConnectLoginContainerPropTypes {
  fetchLogin: (params: LoginParams) => void;
  isFetching: boolean;
  error?: string 
}
