import { Component, input } from '@angular/core';

@Component({
  selector: 'app-service-icon',
  standalone: true,
  template: `
    @switch (icon()) {
      @case ('globe') {
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      }
      @case ('house') {
        <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="9 22 9 12 15 12 15 22" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      }
      @case ('target') {
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      }
      @case ('housing') {
        <svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" fill="none" stroke="currentColor" stroke-width="2"/><line x1="6" y1="1" x2="6" y2="4" stroke="currentColor" stroke-width="2"/><line x1="10" y1="1" x2="10" y2="4" stroke="currentColor" stroke-width="2"/><line x1="14" y1="1" x2="14" y2="4" stroke="currentColor" stroke-width="2"/></svg>
      }
      @case ('mining') {
        <svg viewBox="0 0 24 24"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      }
      @case ('truck') {
        <svg viewBox="0 0 24 24"><rect x="1" y="3" width="15" height="13" rx="1" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 8h4l3 3v5h-7V8z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="5.5" cy="18.5" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="18.5" cy="18.5" r="2.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      }
      @case ('wrench') {
        <svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      }
      @case ('book') {
        <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      }
      @case ('oil') {
        <svg viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      }
      @case ('trade') {
        <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 12h8" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      }
      @case ('box') {
        <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="none" stroke="currentColor" stroke-width="2"/><polyline points="3.27 6.96 12 12.01 20.73 6.96" fill="none" stroke="currentColor" stroke-width="2"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="currentColor" stroke-width="2"/></svg>
      }
      @default {
        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/></svg>
      }
    }
  `,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    svg {
      width: 24px;
      height: 24px;
      stroke: currentColor;
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
  `],
})
export class ServiceIconComponent {
  icon = input.required<string>();
}
