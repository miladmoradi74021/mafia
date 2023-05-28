import { Action } from './Action';
import { Information } from './Information';


export class RoleInformation extends Information {
  side!: RoleSide;
  live?: number = 1;
  actions: Action[] = [];
}

export enum RoleSide {
  none,
  mafia,
  vanilla
}
