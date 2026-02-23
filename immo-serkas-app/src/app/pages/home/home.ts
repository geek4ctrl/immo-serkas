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
  activeTab: 'about' | 'services' = 'about';

  objectiveCards = [
    {
      icon: 'assets/icons/objective.svg',
      title: 'What is our objective?',
      body: 'By 2025, to be among the best companies in construction, customs and services. By 2030, to be a reference in these sectors nationally and internationally.',
    },
    {
      icon: 'assets/icons/goal.svg',
      title: 'What is our goal?',
      body: 'To be a reference for all your real estate and hospitality needs, experienced in buying, selling, diamond cutting, gold extraction and marketing.',
    },
    {
      icon: 'assets/icons/vision.svg',
      title: 'Vision & Mission',
      body: 'To ensure security, surveillance, guarding, and transport of valuables. We also provide private protection of persons and property.',
    },
  ];

  stats = [
    { icon: 'assets/icons/stat-experience.svg', value: '30', label: 'Years of experience' },
    { icon: 'assets/icons/stat-employees.svg',  value: '50', label: 'Specialized employee' },
    { icon: 'assets/icons/stat-customers.svg',  value: '527', label: 'Satisfied customers' },
    { icon: 'assets/icons/stat-projects.svg',   value: '136', label: 'Complete projects' },
  ];
}