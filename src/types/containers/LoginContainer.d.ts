interface LoginParams {
  userName: string;
  password: string;
  remember?: boolean;
}

interface LoginContainerPropTypes {
  fetchLogin: (params: LoginParams) => void;
}

interface LoginContainerStateTypes {
  isFetching: boolean;
  error: string | undefined;
  isLogin: boolean;
}

interface ConnectLoginContainerPropTypes {
  fetchLogin: (params: LoginParams) => void;
  isFetching: boolean;
  isLogin: boolean;
  error?: string 
}
