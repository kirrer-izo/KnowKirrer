import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ToastService } from '../../services/toast.service';
import { LucideAngularModule, X } from 'lucide-angular';

@Component({
    selector: 'app-contact-modal',
    standalone: true,
    imports: [CommonModule, FormsModule, LucideAngularModule],
    templateUrl: './contact-modal.component.html',
    styleUrls: ['./contact-modal.scss']
})
export class ContactModalComponent {
    @Output() close = new EventEmitter<void>();

    readonly XIcon = X;

    formData = {
        name: '',
        email: '',
        message: ''
    };

    isLoading = false;

    constructor(
        private contactService: ContactService,
        private toastService: ToastService
    ) { }

    onClose() {
        this.close.emit();
    }

    onSubmit() {
        this.isLoading = true;

        this.contactService.sendMessage(this.formData).subscribe({
            next: (response: any) => {
                this.isLoading = false;
                this.toastService.show('Message sent successfully!', 'success');
                this.formData = { name: '', email: '', message: '' };
                this.onClose();
            },
            error: (error: any) => {
                this.isLoading = false;
                this.toastService.show('Failed to send message. Please try again.', 'error');
                console.error('Error:', error);
            }
        });
    }
}
