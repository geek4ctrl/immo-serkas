import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceIconComponent } from '../../components/service-icon/service-icon';
import { ALL_SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [RouterLink, ServiceIconComponent],
  templateUrl: './service-detail.html',
  styleUrl: './service-detail.scss',
})
export class ServiceDetail {
  id = input<string | null>(null);

  service = computed(() => {
    const routeId = this.id();
    if (!routeId) return null;
    return ALL_SERVICES.find(s => s.id === routeId) ?? null;
  });
}
