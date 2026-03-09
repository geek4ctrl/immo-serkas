import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { QuoteRequestService } from '../../services/quote-request.service';
import { LanguageService } from '../../services/language.service';
import { QuoteRequest, CargoFile } from '../../models/quote-request.model';
import { PhoneMaskDirective } from '../../directives/phone-mask.directive';
import { AddressAutocompleteComponent, AddressData } from '../../components/address-autocomplete/address-autocomplete';
import { FileUploadComponent, UploadedFile } from '../../components/file-upload/file-upload';

@Component({
  selector: 'app-quote-request',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, PhoneMaskDirective, AddressAutocompleteComponent, FileUploadComponent],
  templateUrl: './quote-request.html',
  styleUrl: './quote-request.scss'
})
export class QuoteRequestPage {
  quoteForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  currentStep = 1;
  totalSteps = 5;

  uploadedFiles: UploadedFile[] = [];

  serviceTypes = [
    { value: 'overseas', label: 'Overseas Shipping' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'tracking', label: 'Tracking' },
    { value: 'housing', label: 'Housing' },
    { value: 'mining', label: 'Mining Operations' },
    { value: 'transport', label: 'Transportation' },
    { value: 'installation', label: "Operation d'installation" },
    { value: 'studies', label: "Opérations d'études" },
    { value: 'oil', label: 'Activités pétrolières' },
    { value: 'trade', label: 'Commerce général' },
    { value: 'logistics', label: 'Logistiques' }
  ];

  cargoTypes = [
    'General Cargo',
    'Container',
    'Bulk Cargo',
    'Heavy Equipment',
    'Vehicles',
    'Perishable Goods',
    'Hazardous Materials',
    'Electronics',
    'Furniture',
    'Machinery',
    'Other'
  ];

  urgencyLevels = [
    { value: 'standard', label: 'Standard (5-7 days)', icon: '📦' },
    { value: 'express', label: 'Express (2-4 days)', icon: '⚡' },
    { value: 'urgent', label: 'Urgent (24-48 hours)', icon: '🚀' }
  ];

  constructor(
    private fb: FormBuilder,
    private quoteService: QuoteRequestService,
    public langService: LanguageService
  ) {
    this.quoteForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.fb.group({
      // Step 1: Personal Information
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+[\d\s]{8,}$/)]],
      companyName: [''],

      // Step 2: Service Type
      serviceType: ['', Validators.required],
      urgency: ['standard', Validators.required],

      // Step 3: Cargo Details
      cargoDetails: this.fb.group({
        cargoType: ['', Validators.required],
        description: ['', [Validators.required, Validators.minLength(10)]],
        weight: [null, [Validators.required, Validators.min(0.1)]],
        weightUnit: ['kg', Validators.required],
        dimensions: this.fb.group({
          length: [null, [Validators.required, Validators.min(0.1)]],
          width: [null, [Validators.required, Validators.min(0.1)]],
          height: [null, [Validators.required, Validators.min(0.1)]]
        }),
        dimensionUnit: ['cm', Validators.required],
        quantity: [1, [Validators.required, Validators.min(1)]],
        isFragile: [false],
        requiresRefrigeration: [false],
        isHazardous: [false]
      }),

      // Step 4: Locations
      pickupLocation: this.fb.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        postalCode: ['', Validators.required],
        contactName: ['', Validators.required],
        contactPhone: ['', [Validators.required, Validators.pattern(/^\+[\d\s]{8,}$/)]]
      }),

      deliveryLocation: this.fb.group({
        address: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        postalCode: ['', Validators.required],
        contactName: ['', Validators.required],
        contactPhone: ['', [Validators.required, Validators.pattern(/^\+[\d\s]{8,}$/)]]
      }),

      // Step 5: Additional
      additionalNotes: ['']
    });
  }

  get cargoDetailsForm(): FormGroup {
    return this.quoteForm.get('cargoDetails') as FormGroup;
  }

  get pickupLocationForm(): FormGroup {
    return this.quoteForm.get('pickupLocation') as FormGroup;
  }

  get deliveryLocationForm(): FormGroup {
    return this.quoteForm.get('deliveryLocation') as FormGroup;
  }

  onPickupAddressSelected(addressData: AddressData): void {
    this.pickupLocationForm.patchValue({
      address: addressData.address,
      city: addressData.city,
      country: addressData.country,
      postalCode: addressData.postalCode
    });
  }

  onDeliveryAddressSelected(addressData: AddressData): void {
    this.deliveryLocationForm.patchValue({
      address: addressData.address,
      city: addressData.city,
      country: addressData.country,
      postalCode: addressData.postalCode
    });
  }

  onFilesChanged(files: UploadedFile[]): void {
    this.uploadedFiles = files;
  }

  nextStep(): void {
    if (this.isCurrentStepValid()) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    this.currentStep--;
  }

  goToStep(step: number): void {
    if (step < this.currentStep || this.isCurrentStepValid()) {
      this.currentStep = step;
    }
  }

  isCurrentStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.quoteForm.get('firstName')?.valid &&
               this.quoteForm.get('lastName')?.valid &&
               this.quoteForm.get('email')?.valid &&
               this.quoteForm.get('phone')?.valid || false;
      case 2:
        return this.quoteForm.get('serviceType')?.valid || false;
      case 3:
        return this.cargoDetailsForm.valid;
      case 4:
        return this.pickupLocationForm.valid && this.deliveryLocationForm.valid;
      case 5:
        return true; // Step 5 is optional
      default:
        return false;
    }
  }

  onSubmit(): void {
    if (this.quoteForm.valid) {
      this.isSubmitting = true;
      this.submitError = false;

      const request: QuoteRequest = {
        ...this.quoteForm.value,
        attachments: this.uploadedFiles.map(file => ({
          id: file.id,
          name: file.name,
          size: file.size,
          type: file.type,
          dataUrl: file.dataUrl
        } as CargoFile))
      };

      this.quoteService.submitQuoteRequest(request).subscribe({
        next: () => {
          this.isSubmitting = false;
          this.submitSuccess = true;
        },
        error: () => {
          this.isSubmitting = false;
          this.submitError = true;
        }
      });
    }
  }

  resetForm(): void {
    this.quoteForm.reset();
    this.uploadedFiles = [];
    this.currentStep = 1;
    this.submitSuccess = false;
    this.submitError = false;
  }
}
