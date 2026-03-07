import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  showSuccess = false;
  fullName = '';
  phone = '';
  email = '';
  topic = '';
  message = '';
  private successTimer: number | null = null;

  constructor(public langService: LanguageService) {}

  onSubmit(form: NgForm): void {
    if (form.invalid) return;
    this.showSuccess = true;
    form.resetForm();
    if (this.successTimer) {
      window.clearTimeout(this.successTimer);
    }
    this.successTimer = window.setTimeout(() => {
      this.showSuccess = false;
      this.successTimer = null;
    }, 4000);
  }

  dismissSuccess(): void {
    this.showSuccess = false;
    if (this.successTimer) {
      window.clearTimeout(this.successTimer);
      this.successTimer = null;
    }
  }
}
