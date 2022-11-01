import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <ul class="flex gap-x-4 bg-green-600 justify-center text-white">
      <li class="cursor-pointer" routerLink="/home">Home</li>
      <li class="cursor-pointer" routerLink="/about">About</li>
      <li class="cursor-pointer" routerLink="/contact">Contact</li>
      <li class="cursor-pointer" routerLink="/messages">Messages</li>
    </ul>
    <!-- <div class="w-screen h-screen grid justify-center content-center">
      <p class=" bg-blue-500 w-1/2 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cumque
        incidunt, quam minima molestiae minus repellendus esse soluta nulla
        porro eos, itaque laboriosam eaque id ipsa. Illo at officia numquam.
      </p>
      <p class=" bg-blue-500 w-1/2 ">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus cumque
        incidunt, quam minima molestiae minus repellendus esse soluta nulla
        porro eos, itaque laboriosam eaque id ipsa. Illo at officia numquam.
      </p>
    </div> -->
    <router-outlet> </router-outlet>`,
  styles: [
    `
      /* ul {
        display: flex;
        column-gap: 3vw;
        background: green;
        justify-content: center;
        color: white;
      }

      li {
        cursor: pointer;
      } */
    `,
  ],
})
export class AppComponent {
  title = 'practica';
}
