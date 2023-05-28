import { PlayerStatus } from '../PlayerStatus';
import { Action, ValueActionResult } from '../Action';
import { Game } from '../Game';
import { SelectPlayerParameter } from '../parameters/SelectPlayerParameter';
import { SelectPlayerParameterValue } from '../parameters/SelectPlayerParameterValue';
import { RoleSide } from '../RoleInformation';


export class CheckMafiaAction extends Action {
  constructor() {
    super({
      name: 'چک',
      parameters: [
        new SelectPlayerParameter()
      ]
    });
  }

  override invoke(game: Game, parameter: SelectPlayerParameterValue): ValueActionResult<boolean> {
    const player = game.information.players.find((x) => x.information.name == parameter.playerName);
    if (!player) {
      return { value: false }
    }

    player.information.status = PlayerStatus.dead;
    return { value: player.information.role.information.side == RoleSide.mafia }
  }
}
