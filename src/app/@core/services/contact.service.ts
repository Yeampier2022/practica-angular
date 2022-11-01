import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  messages: any[] = [
    { email: 'false@gmail.com', message: 'hola' },
    { email: 'false1@gmail.com', message: 'hola1' },

  ];
  constructor() {}
}
