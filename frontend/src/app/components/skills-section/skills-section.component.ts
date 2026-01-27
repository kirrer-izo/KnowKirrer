import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, GitBranch, Code2, Server, Database, Container, Hexagon } from 'lucide-angular';
import { pageAnimations } from '../../animations/page-animations';

interface Skill {
    label: string;
    icon: any;
    delay: number;
}

@Component({
    selector: 'app-skills-section',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './skills-section.component.html',
    styleUrls: ['./skills-section.component.scss'],
    animations: [pageAnimations]
})
export class SkillsSectionComponent {
    skills: Skill[] = [
        { label: 'Git', icon: GitBranch, delay: 0.1 },
        { label: 'React', icon: Code2, delay: 0.2 },
        { label: 'Laravel', icon: Server, delay: 0.3 },
        { label: 'MySQL', icon: Database, delay: 0.4 },
        { label: 'Docker', icon: Container, delay: 0.5 },
        { label: 'Node.js', icon: Hexagon, delay: 0.6 }
    ];
}
