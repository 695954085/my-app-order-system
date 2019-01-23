interface ServiceType {
  key: string;
  serviceName: string;
  path: string;
  children?: ServiceType[];
  component: any;
}