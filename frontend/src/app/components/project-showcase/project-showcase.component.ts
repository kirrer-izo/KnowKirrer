import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pageAnimations } from '../../animations/page-animations';
import { Project, ProjectCardComponent } from '../project-card/project-card.component';

@Component({
    selector: 'app-project-showcase',
    standalone: true,
    imports: [CommonModule, ProjectCardComponent],
    templateUrl: './project-showcase.component.html',
    styleUrls: ['./project-showcase.component.scss'],
    animations: [pageAnimations]
})
export class ProjectShowcaseComponent {
    projects: Project[] = [
        {
            title: 'Live Your Books',
            description: 'Live Your Books aims to bridge the gap between passive reading and the meaningful, real world application of knowledge. It leverages artificial intelligence to simulate mentorship from renowned thinkers and authors, guiding users towards continuous self-improvement. The core modules are; Books, Task Generator, Habit Tracker, Journal, AI Mentor, and AI Features (It includes weekly growth summary, personalized advice, habit suggestions, and routine builder).',
            techStack: ['React', 'Laravel', 'Gemini API', 'Tailwind'],
            // Assuming assets will be fixed
            screenshotUrl: 'Live Your Books Application Screenshot.png',
            projectDetailUrl: '/projects/live-your-books',
            githubUrl: 'https://github.com/kirrer-izo/LiveYourBooks'
        },
        {
            title: 'Sole Proprietor CRM',
            description: 'A customer relationship management web application designed for sole proprietors to manage leads and invoices.',
            techStack: ['PHP', 'MySQL', 'Bootstrap'],
            screenshotUrl: 'CRM Application screenshot.png',
            projectDetailUrl: '/projects/sole-proprietor-crm',
            githubUrl: 'https://github.com/Btsolo/CRM-Team-Project-'
        }
    ];
}
