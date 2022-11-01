import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { ContactService } from 'src/app/@core/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  messages = this.contactService.messages;

  index = null;
  form = this.handleCreateForm();

  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  handleSubmit() {
    const formValue = this.form.value;
    if (this.index === null) {
      this.messages.push(formValue);
    } else {
      this.messages[this.index] = formValue;
    }
    this.router.navigate(['messages']);
  }

  handleCreateForm() {
    this.index = this.route.snapshot.params['index'];

    const form = new FormGroup({
      email: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });

    if (this.index !== null) {
      form.patchValue(this.messages[this.index]);
    }
    return form;
  }
}
