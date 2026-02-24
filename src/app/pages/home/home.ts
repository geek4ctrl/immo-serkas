import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent {
  /** Controls which tab panel is visible */
  activeTab: 'about' | 'services' = 'about';

  setTab(tab: 'about' | 'services'): void {
    this.activeTab = tab;
  }

  /** 8 cards for the left staggered mosaic in the Services panel */
  mosaicServices = [
    { img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&q=80', label: 'Clearance' },
    { img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80', label: 'Real Estate' },
    { img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&q=80', label: 'Tracking' },
    { img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=500&q=80', label: 'Handling' },
    { img: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80', label: 'Mining Operation' },
    { img: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&q=80', label: 'Transportation' },
    { img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b6f64?w=500&q=80', label: 'Study Operation' },
    { img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&q=80', label: 'Oil Activity' },
  ];

  /** 4 cards for the right 2×2 grid in the Services panel */
  gridServices = [
    { img: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=400&q=80', label: 'Logistics' },
    { img: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=400&q=80', label: 'Installation Operation' },
    { img: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=400&q=80', label: 'General Trade' },
    { img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80', label: 'Oil Activity' },
  ];

  /** Objective cards — only shown when activeTab === 'about' */
  objectiveCards = [
    {
      title: 'What is our objective?',
      body:  'By 2025, to be among the best companies in construction, customs and services. By 2030, to be a reference in these sectors nationally and internationally.',
    },
    {
      title: 'What is our goal?',
      body:  'To be a reference for all real estate and hospitality needs — experienced in buying, selling, diamond cutting, gold extraction, and marketing across Africa.',
    },
    {
      title: 'Vision & Mission',
      body:  'To ensure security, surveillance, guarding, and transport of valuables. We provide private protection of persons and property in all forms.',
    },
  ];

  /** Why Choose Us stats */
  stats = [
    { icon: 'trend', value: '30',  label: 'Years of experience' },
    { icon: 'users', value: '50',  label: 'Specialized employees' },
    { icon: 'check', value: '527', label: 'Satisfied customers' },
    { icon: 'grid',  value: '136', label: 'Complete projects' },
  ];
}