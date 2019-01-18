import { Action } from 'redux';

export interface ActionType extends Action<string> {
  [key: string]: any;
}
