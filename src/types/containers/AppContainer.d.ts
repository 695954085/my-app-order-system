import { RouteComponentProps } from "react-router";

export interface AppContainerStateProps {
  isLogin: boolean;  
}

export interface AppContainerOwnProps extends RouteComponentProps<any> {}