import { Role } from "../Role";
import { RoleSide } from "../RoleInformation";


export class MayorRole extends Role {
  constructor() {
    super({
      name: "شهردار",
      side: RoleSide.vanilla,
      actions: []
    });
  }
}
