import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/@core/services/contact.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  messages = this.contactService.messages;

  constructor(private contactService: ContactService, private router: Router) {}

  handleDelete(index: any) {
    const isConfirmed = confirm('Estas seguro de eliminar?');
    if (!isConfirmed) {
      return;
    }

    this.contactService.messages = this.messages.filter(
      (value: any, i) => i !== index
    );
    this.messages = this.contactService.messages;
  }

  handleUpdate(index: number) {
    this.router.navigate(['contact', index]);
  }
}
