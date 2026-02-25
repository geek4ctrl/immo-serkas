import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  onSubmit(e: Event): void {
    e.preventDefault();
    // Form submission logic can be added here
  }
}
