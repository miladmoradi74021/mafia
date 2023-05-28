import { Role } from "../Role";
import { RoleInformation, RoleSide } from "../RoleInformation";


export class VanillaRole extends Role {
  constructor(information: RoleInformation) {
    super({
      name: "شهروند",
      side: RoleSide.vanilla,
      actions: [],
      ...Object.entries(information)
    });
  }
}
