import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';
import { LucideAngularModule, X, CheckCircle, AlertCircle, Info } from 'lucide-angular';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-toast',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    template: `
    <div class="toast-container position-fixed top-0 end-0 p-3" style="z-index: 2000; pointer-events: none;">
      <div *ngFor="let toast of toastService.toasts()"
           class="toast show align-items-center mb-2 shadow-sm border-0 animate-toast"
           [class.bg-success]="toast.type === 'success'"
           [class.bg-danger]="toast.type === 'error'"
           [class.bg-info]="toast.type === 'info'"
           [class.text-white]="true"
           role="alert" 
           aria-live="assertive" 
           aria-atomic="true"
           style="pointer-events: auto;">
        <div class="d-flex">
          <div class="toast-body d-flex align-items-center gap-2">
            <lucide-icon [img]="getIcon(toast.type)" [size]="18"></lucide-icon>
            {{ toast.message }}
          </div>
          <button type="button" class="btn-close btn-close-white me-2 m-auto" (click)="toastService.remove(toast.id)" aria-label="Close"></button>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .animate-toast {
      animation: slideIn 0.3s ease-out forwards;
    }
    @keyframes slideIn {
      from { transform: translateX(100%); opacity: 0; }
      to { transform: translateX(0); opacity: 1; }
    }
  `]
})
export class ToastComponent {
    readonly CheckCircle = CheckCircle;
    readonly AlertCircle = AlertCircle;
    readonly Info = Info;

    constructor(public toastService: ToastService) { }

    getIcon(type: string) {
        switch (type) {
            case 'success': return this.CheckCircle;
            case 'error': return this.AlertCircle;
            default: return this.Info;
        }
    }
}
