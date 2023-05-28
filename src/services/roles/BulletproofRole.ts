import { Role } from "../Role";
import { RoleSide } from "../RoleInformation";


export class BulletproofRole extends Role {
  constructor() {
    super({
      name: "جان سخت",
      live: 2,
      side: RoleSide.vanilla,
      actions: []
    });
  }
}
