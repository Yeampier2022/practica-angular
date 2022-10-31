import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <ul class="header">

      <li routerLink="/home">Home</li>
      <li routerLink="/about">About</li>
      <li routerLink="/contact"> Contact </li>
</ul>
    <router-outlet> </router-outlet>`,
  styles: [
    `
      ul {
        display: flex;
        column-gap: 3vw;
        background: green;
        justify-content: center;
        color: white;
      }

      li {
        cursor: pointer;
      }
    `,
  ],
})
export class AppComponent {
  title = 'practica';
}
