import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = 'sariza'
  isLoggedIn = false

  greet = (msj: String) => {
    alert(msj);
  }
}
