import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService, type Language } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  constructor(public langService: LanguageService) {}

  onLangChange(e: Event): void {
    const target = e.target as HTMLSelectElement;
    this.langService.setLanguage(target.value as Language);
  }
}
