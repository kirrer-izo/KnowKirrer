import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Home } from 'lucide-angular';
import { ContactModalComponent } from '../contact-modal/contact-modal.component';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterModule, LucideAngularModule, ContactModalComponent],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    readonly HomeIcon = Home;
    activeSection = '';
    isContactModalOpen = false;

    constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (!isPlatformBrowser(this.platformId)) return;

        const sections = ['about', 'skills', 'projects'];
        // Offset calculation matching spec: scrollY + 100
        const scrollPosition = window.scrollY + 100;

        for (const sectionId of sections) {
            const element = document.getElementById(sectionId);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    this.activeSection = sectionId;
                    break;
                }
            }
        }
    }

    openContactModal() {
        this.isContactModalOpen = true;
    }

    closeContactModal() {
        this.isContactModalOpen = false;
    }
}
