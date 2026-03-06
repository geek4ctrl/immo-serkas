import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { QuoteRequest } from '../models/quote-request.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteRequestService {
  private readonly STORAGE_KEY = 'quote_requests';

  constructor() {}

  submitQuoteRequest(request: QuoteRequest): Observable<QuoteRequest> {
    const requests = this.getStoredRequests();
    const newRequest: QuoteRequest = {
      ...request,
      id: this.generateId(),
      createdAt: new Date(),
      status: 'pending'
    };
    
    requests.push(newRequest);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(requests));
    
    // Simulate API call with delay
    return of(newRequest).pipe(delay(1000));
  }

  getAllRequests(): QuoteRequest[] {
    return this.getStoredRequests();
  }

  getRequestById(id: string): QuoteRequest | undefined {
    return this.getStoredRequests().find(r => r.id === id);
  }

  private getStoredRequests(): QuoteRequest[] {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  }

  private generateId(): string {
    return 'quote_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
}
