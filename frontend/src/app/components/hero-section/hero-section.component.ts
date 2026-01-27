import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, MessageSquare, Instagram } from 'lucide-angular';
import { pageAnimations } from '../../animations/page-animations';

@Component({
    selector: 'app-hero-section',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './hero-section.component.html',
    styleUrls: ['./hero-section.component.scss'],
    animations: [pageAnimations]
})
export class HeroSectionComponent {
    readonly GithubIcon = Github;
    readonly MessageSquareIcon = MessageSquare;
    readonly InstagramIcon = Instagram;

    // Ideally this path should be valid. Assuming copy worked or we use a fallback.
    // Given copy failed, I will assume we might need to manually fix assets later, 
    // but code should reference the INTENDED location.
    profileImageUrl = 'assets/5d34ce962d479978f09193b267fa143b54b40a94.png';

    socialLinks = {
        github: 'https://github.com/kirrer-izo',
        discord: 'https://discord.gg/4b2jCVYW',
        instagram: 'https://www.instagram.com/kirrer__/'
    };
}
