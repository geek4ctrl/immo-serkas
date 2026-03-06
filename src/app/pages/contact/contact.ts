import { Component } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  constructor(public langService: LanguageService) {}

  onSubmit(e: Event): void {
    e.preventDefault();
    // Form submission logic can be added here
  }
}
