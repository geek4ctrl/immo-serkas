import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

declare global {
  interface Window {
    google: any;
  }
}

export interface AddressData {
  address: string;
  city: string;
  country: string;
  postalCode: string;
  latitude?: number;
  longitude?: number;
}

@Component({
  selector: 'app-address-autocomplete',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="address-autocomplete">
      <input
        #addressInput
        type="text"
        [placeholder]="placeholder"
        [formControl]="addressControl"
        class="address-input"
        autocomplete="off"
      />
      <div *ngIf="isLoading" class="loading-indicator">
        <span class="spinner"></span>
      </div>
    </div>
  `,
  styles: [`
    .address-autocomplete {
      position: relative;
      width: 100%;
    }

    .address-input {
      width: 100%;
      padding: 12px 16px;
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      font-size: 1rem;
      transition: all 0.2s ease;

      &:focus {
        outline: none;
        border-color: #1e3a5f;
      }
    }

    .loading-indicator {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
    }

    .spinner {
      display: inline-block;
      width: 20px;
      height: 20px;
      border: 2px solid #e2e8f0;
      border-top-color: #1e3a5f;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    :host ::ng-deep .pac-container {
      border-radius: 8px;
      margin-top: 4px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      border: 1px solid #e2e8f0;
      font-family: inherit;
    }

    :host ::ng-deep .pac-item {
      padding: 10px 16px;
      cursor: pointer;
      border-bottom: 1px solid #f1f5f9;

      &:hover {
        background-color: #f8fafc;
      }

      &:last-child {
        border-bottom: none;
      }
    }

    :host ::ng-deep .pac-icon {
      margin-right: 12px;
    }
  `]
})
export class AddressAutocompleteComponent implements AfterViewInit, OnDestroy {
  @ViewChild('addressInput') addressInput!: ElementRef<HTMLInputElement>;
  
  @Input() placeholder = 'Enter address...';
  @Input() addressControl: any;
  @Input() countryRestriction: string[] = [];
  
  @Output() addressSelected = new EventEmitter<AddressData>();
  @Output() placeChanged = new EventEmitter<any>();

  isLoading = false;
  private autocomplete: any;

  ngAfterViewInit(): void {
    this.loadGoogleMapsScript();
  }

  ngOnDestroy(): void {
    if (this.autocomplete) {
      window.google?.maps?.event?.clearInstanceListeners(this.autocomplete);
    }
  }

  private loadGoogleMapsScript(): void {
    if (window.google?.maps?.places) {
      this.initializeAutocomplete();
      return;
    }

    const existingScript = document.getElementById('google-maps-script');
    if (existingScript) {
      existingScript.addEventListener('load', () => this.initializeAutocomplete());
      return;
    }

    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => this.initializeAutocomplete();
    document.head.appendChild(script);
  }

  private initializeAutocomplete(): void {
    if (!window.google?.maps?.places) {
      console.error('Google Maps Places library not loaded');
      return;
    }

    const options: any = {
      types: ['address'],
      fields: ['address_components', 'formatted_address', 'geometry', 'place_id']
    };

    if (this.countryRestriction.length > 0) {
      options.componentRestrictions = { country: this.countryRestriction };
    }

    this.autocomplete = new window.google.maps.places.Autocomplete(
      this.addressInput.nativeElement,
      options
    );

    this.autocomplete.addListener('place_changed', () => {
      const place = this.autocomplete.getPlace();
      this.handlePlaceSelect(place);
    });
  }

  private handlePlaceSelect(place: any): void {
    if (!place.address_components) {
      return;
    }

    const addressData: AddressData = {
      address: place.formatted_address || '',
      city: '',
      country: '',
      postalCode: ''
    };

    if (place.geometry?.location) {
      addressData.latitude = place.geometry.location.lat();
      addressData.longitude = place.geometry.location.lng();
    }

    for (const component of place.address_components) {
      const types = component.types;

      if (types.includes('locality') || types.includes('administrative_area_level_2')) {
        addressData.city = component.long_name;
      }

      if (types.includes('country')) {
        addressData.country = component.long_name;
      }

      if (types.includes('postal_code')) {
        addressData.postalCode = component.long_name;
      }
    }

    this.addressSelected.emit(addressData);
    this.placeChanged.emit(place);
  }
}
