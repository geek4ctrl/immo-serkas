import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'fr';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  currentLang = signal<Language>('en');

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
  }

  isEn(): boolean {
    return this.currentLang() === 'en';
  }

  isFr(): boolean {
    return this.currentLang() === 'fr';
  }
}
