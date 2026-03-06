import { Component, ElementRef, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService, type Language } from '../../services/language.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuOpen = false;

  constructor(public langService: LanguageService, private host: ElementRef<HTMLElement>) {}

  onLangChange(e: Event): void {
    const target = e.target as HTMLSelectElement;
    this.langService.setLanguage(target.value as Language);
    this.closeMenu();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.menuOpen) return;
    const target = event.target as Node | null;
    if (!target) return;
    if (!this.host.nativeElement.contains(target)) {
      this.closeMenu();
    }
  }
}
