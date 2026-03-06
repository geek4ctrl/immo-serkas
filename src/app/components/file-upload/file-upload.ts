import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  dataUrl: string;
  file: File;
}

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="file-upload">
      <div
        class="drop-zone"
        [class.drag-over]="isDragOver"
        (dragover)="onDragOver($event)"
        (dragleave)="onDragLeave($event)"
        (drop)="onDrop($event)"
        (click)="fileInput.click()"
      >
        <input
          #fileInput
          type="file"
          [multiple]="multiple"
          [accept]="acceptedTypes"
          (change)="onFileSelect($event)"
          hidden
        />
        <div class="drop-zone-content">
          <svg class="upload-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          <p class="drop-text">
            <strong>Click to upload</strong> or drag and drop
          </p>
          <p class="file-types">{{ acceptedTypesLabel }}</p>
          <p class="max-size">Max file size: {{ formatFileSize(maxFileSize) }}</p>
        </div>
      </div>

      <div *ngIf="files.length > 0" class="file-list">
        <div *ngFor="let file of files; let i = index" class="file-item">
          <div class="file-preview" *ngIf="isImage(file)">
            <img [src]="file.dataUrl" [alt]="file.name" />
          </div>
          <div class="file-icon" *ngIf="!isImage(file)">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <line x1="16" y1="13" x2="8" y2="13"/>
              <line x1="16" y1="17" x2="8" y2="17"/>
              <polyline points="10 9 9 9 8 9"/>
            </svg>
          </div>
          <div class="file-info">
            <span class="file-name">{{ file.name }}</span>
            <span class="file-size">{{ formatFileSize(file.size) }}</span>
          </div>
          <button type="button" class="remove-btn" (click)="removeFile(i); $event.stopPropagation()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>

      <div *ngIf="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  `,
  styles: [`
    .file-upload {
      width: 100%;
    }

    .drop-zone {
      border: 2px dashed #cbd5e1;
      border-radius: 12px;
      padding: 40px 20px;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s ease;
      background: #f8fafc;

      &:hover {
        border-color: #1e3a5f;
        background: #f1f5f9;
      }

      &.drag-over {
        border-color: #1e3a5f;
        background: #e0f2fe;
      }
    }

    .drop-zone-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .upload-icon {
      width: 48px;
      height: 48px;
      color: #64748b;
      margin-bottom: 8px;
    }

    .drop-text {
      color: #374151;
      margin: 0;

      strong {
        color: #1e3a5f;
      }
    }

    .file-types,
    .max-size {
      font-size: 0.875rem;
      color: #64748b;
      margin: 0;
    }

    .file-list {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .file-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px;
      background: #f8fafc;
      border-radius: 8px;
      border: 1px solid #e2e8f0;
    }

    .file-preview {
      width: 48px;
      height: 48px;
      border-radius: 6px;
      overflow: hidden;
      flex-shrink: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .file-icon {
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #e2e8f0;
      border-radius: 6px;
      flex-shrink: 0;

      svg {
        width: 24px;
        height: 24px;
        color: #64748b;
      }
    }

    .file-info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .file-name {
      font-weight: 500;
      color: #374151;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .file-size {
      font-size: 0.875rem;
      color: #64748b;
    }

    .remove-btn {
      width: 32px;
      height: 32px;
      border: none;
      background: #fee2e2;
      border-radius: 6px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      flex-shrink: 0;

      &:hover {
        background: #fecaca;
      }

      svg {
        width: 16px;
        height: 16px;
        color: #dc2626;
      }
    }

    .error-message {
      margin-top: 12px;
      padding: 12px;
      background: #fee2e2;
      border: 1px solid #fecaca;
      border-radius: 8px;
      color: #dc2626;
      font-size: 0.875rem;
    }
  `]
})
export class FileUploadComponent {
  @Input() multiple = true;
  @Input() maxFileSize = 10 * 1024 * 1024; // 10MB default
  @Input() acceptedTypes = 'image/*,.pdf,.doc,.docx';
  @Input() acceptedTypesLabel = 'Images, PDF, Word documents';
  @Input() maxFiles = 5;

  @Output() filesChanged = new EventEmitter<UploadedFile[]>();

  files: UploadedFile[] = [];
  isDragOver = false;
  errorMessage = '';

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.isDragOver = false;

    const droppedFiles = event.dataTransfer?.files;
    if (droppedFiles) {
      this.processFiles(Array.from(droppedFiles));
    }
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.processFiles(Array.from(input.files));
    }
  }

  private processFiles(newFiles: File[]): void {
    this.errorMessage = '';

    // Check max files
    if (this.files.length + newFiles.length > this.maxFiles) {
      this.errorMessage = `Maximum ${this.maxFiles} files allowed`;
      return;
    }

    newFiles.forEach(file => {
      // Check file size
      if (file.size > this.maxFileSize) {
        this.errorMessage = `File "${file.name}" exceeds maximum size of ${this.formatFileSize(this.maxFileSize)}`;
        return;
      }

      // Read file
      const reader = new FileReader();
      reader.onload = (e) => {
        const uploadedFile: UploadedFile = {
          id: this.generateId(),
          name: file.name,
          size: file.size,
          type: file.type,
          dataUrl: e.target?.result as string,
          file: file
        };

        this.files.push(uploadedFile);
        this.filesChanged.emit(this.files);
      };
      reader.readAsDataURL(file);
    });
  }

  removeFile(index: number): void {
    this.files.splice(index, 1);
    this.filesChanged.emit(this.files);
    this.errorMessage = '';
  }

  isImage(file: UploadedFile): boolean {
    return file.type.startsWith('image/');
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  private generateId(): string {
    return 'file_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  }
}
