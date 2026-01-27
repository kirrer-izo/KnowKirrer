import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Instagram } from 'lucide-angular';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    readonly GithubIcon = Github;
    readonly LinkedinIcon = Linkedin;
    readonly InstagramIcon = Instagram;

    contactInfo = {
        email: 'isaackmuchoki55@gmail.com',
        phone: '+254792590501',
        phoneDisplay: '+254 792 590 501'
    };

    socialLinks = {
        github: 'https://github.com/kirrer-izo',
        linkedin: 'https://www.linkedin.com/in/isaack-muchoki-2b5719316/',
        instagram: 'https://www.instagram.com/kirrer__/'
    };
}
