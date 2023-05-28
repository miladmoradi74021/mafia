import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  ClassicMafia,
  Game,
  GameService,
  Player,
} from 'src/services/game.service';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  categoryName: string = 'دسته مافیا';
  tp: string = "";
  categoryListWithDetail: any[] = [
    {
      name: 'کلاسیک',
    },
    {
      name: 'روسی',
    },
    {
      name: 'پیشرفته',
    },
  ];

  classic = new ClassicMafia();
  roles: any = [];
  game: Game;

  constructor(private gameService: GameService) {
    this.roles = this.classic.roles;
    this.game = new Game(
      this.classic,
      new Player('Alireza', this.classic.roles[0]),
      new Player('Milad', this.classic.roles[1]),
      new Player('Vahid', this.classic.roles[2]),
      new Player('khashi', this.classic.roles[2]),
    );
    debugger;
  }

  addCategory() {}

  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  ngAfterViewInit(): void {
    register();
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  onActiveIndexChange() {
    console.log(this.swiper?.activeIndex);
  }
}
