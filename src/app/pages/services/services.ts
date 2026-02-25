import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceIconComponent } from '../../components/service-icon/service-icon';
import { ALL_SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-services',
  imports: [RouterLink, ServiceIconComponent],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = ALL_SERVICES;
}
