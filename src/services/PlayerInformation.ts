import { Role } from './Role';
import { PlayerStatus } from './PlayerStatus';
import { Information } from './Information';


export class PlayerInformation extends Information {
  role!: Role;
  status?: PlayerStatus = PlayerStatus.live;
}
