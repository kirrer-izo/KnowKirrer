import { Injectable, signal } from '@angular/core';

export interface Toast {
    message: string;
    type: 'success' | 'error' | 'info';
    id: number;
}

@Injectable({
    providedIn: 'root'
})
export class ToastService {
    toasts = signal<Toast[]>([]);
    private counter = 0;

    show(message: string, type: 'success' | 'error' | 'info' = 'info') {
        const id = this.counter++;
        this.toasts.update(current => [...current, { message, type, id }]);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            this.remove(id);
        }, 3000);
    }

    remove(id: number) {
        this.toasts.update(current => current.filter(t => t.id !== id));
    }
}
