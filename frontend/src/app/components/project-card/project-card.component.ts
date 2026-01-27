import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Github } from 'lucide-angular';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

export interface Project {
    title: string;
    description: string;
    techStack: string[];
    screenshotUrl?: string;
    projectDetailUrl?: string;
    githubUrl?: string;
}

@Component({
    selector: 'app-project-card',
    standalone: true,
    imports: [CommonModule, RouterModule, LucideAngularModule],
    templateUrl: './project-card.component.html',
    styleUrls: ['./project-card.component.scss'],
    animations: [
        trigger('shake', [
            transition('* => true', [ // When isHovered becomes true
                animate('0.5s ease-in-out', keyframes([
                    style({ transform: 'translateX(0) rotate(0)', offset: 0 }),
                    style({ transform: 'translateX(-2px) rotate(-1deg)', offset: 0.25 }),
                    style({ transform: 'translateX(2px) rotate(1deg)', offset: 0.50 }),
                    style({ transform: 'translateX(-2px) rotate(-1deg)', offset: 0.75 }),
                    style({ transform: 'translateX(0) rotate(0)', offset: 1.0 })
                ]))
            ])
        ])
    ]
})
export class ProjectCardComponent {
    @Input() project!: Project;
    @Input() imageOnLeft: boolean = true;

    readonly GithubIcon = Github;
    isHovered = false;

    onHover(state: boolean) {
        this.isHovered = state;
    }
}
