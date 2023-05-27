import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  current?: Game;

  start(): void {
    this.current = new Game(new ClassicMafia());
  }
  stop(): void {}
  reset(): void {}
}

export interface IGameBuilderAddPlayer {
  addPlayer(name: string): void;
}

export class GameBuilder {}

export class Game {
  constructor(type: GameType, ...players: Player[]) {
    this.type = type;
    this.players = players;
  }

  type: GameType;
  players: Player[] = [];
}

export class GameType {
  constructor(name: string, ...roles: Role[]) {
    this.name = name;
    this.roles = roles;
  }

  name: string;
  roles: Role[] = [];
}

export class Role {
  constructor(name: string, ...actions: Action[]) {
    this.name = name;
    this.actions = actions;
  }

  name: string;
  actions: Action[] = [];
}

export class Player {
  constructor(
    name: string,
    role: Role,
    status: PlayerStatus = PlayerStatus.live
  ) {
    this.role = role;
    this.name = name;
    this.status = status;
  }

  name: string;
  role: Role;
  status: PlayerStatus;
}

export enum PlayerStatus {
  none = 0,
  live = 1,
  dead = 2,
}

export class Action {
  constructor(name: string, action: (...args: any[]) => boolean) {
    this.name = name;
    this.action = action;
  }

  name: string;
  private action: (game: Game, ...args: any[]) => boolean;
  invoke(game: Game, ...args: any[]) {
    this.action(game, ...args);
  }
}

export class KillAction extends Action {
  constructor() {
    super('kill', (game: Game, ...args: any[]) => {
      const player = game.players.find((x) => x.name == args[0]);
      if (!player) {
        return false;
      }
      player.status = PlayerStatus.dead;
      return true;
    });
  }
}

export class ClassicMafia extends GameType {
  constructor() {
    super(
      'ClassicMafia',
      new Role('GodFather', new KillAction()),
      new Role('Sniper', new KillAction()),
      new Role('Single')
    );
  }
}
