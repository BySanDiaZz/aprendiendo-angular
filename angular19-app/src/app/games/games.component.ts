import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
    <section>
      {{ 'Los juegos de: ' + username }}
      <ul>
        @for (game of games; track game.id) {
          <li>{{ game.id }}. {{ (game.name).toUpperCase() }}</li>
        }
      </ul>    
    </section>
  `,
  styles: `
    
  `
})
export class GamesComponent {

  @Input() username = '';

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
