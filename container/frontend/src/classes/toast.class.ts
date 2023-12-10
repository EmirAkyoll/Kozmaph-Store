// toast.service.ts

import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class Toast {
  constructor(private messageService: MessageService) {}

  show(message: string, severity: string): void {
    this.messageService.add({
      severity: severity,
      detail: message
    });
  }
}
