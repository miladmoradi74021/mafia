import { Injectable } from '@angular/core';
import { ClassicScenario } from './scenarios/ClassicScenario';
import { Game } from './Game';
import { Player } from './Player';
import { GodFatherRole } from './roles/GodFatherRole';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() { }

  current?: Game;

  start(): void {
    this.current = new Game({
      name: "a game",
      scenario: new ClassicScenario(),
      players: [
        new Player({
          name: "nafas",
          role: new GodFatherRole()
        })
      ]
    });
  }
  stop(): void { }
  reset(): void { }
}


