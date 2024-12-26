import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    <section>
      {{ 'Los juegos de ' + username }}
      <ul>
        @for (game of games; track game.id) {
          <li (click)="fav(game.name)"> {{ game.id }}. {{ (game.name).toUpperCase() }} </li>
        }
      </ul>    
    </section>
  `,
  styles: `
    
  `
})
export class GamesComponent {

  @Input() username = '';

  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName : string){
    this.addFavoriteEvent.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'The Crew Motorfest'
    },
    {
      id: 2,
      name: 'EA Sports FC 24'
    },
    {
      id: 3,
      name: 'Hogwarts Legacy'
    },
  ]
}
