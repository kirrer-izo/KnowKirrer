import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, BookOpen, Target, ArrowRight } from 'lucide-angular';
import { pageAnimations } from '../../animations/page-animations';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BrowserFrameComponent } from '../../components/browser-frame/browser-frame.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-live-your-books',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        LucideAngularModule,
        HeaderComponent,
        FooterComponent,
        BrowserFrameComponent
    ],
    templateUrl: './live-your-books.component.html',
    styleUrls: ['./live-your-books.component.scss'],
    animations: [
        pageAnimations,
        // Custom rotation animation for icons on hover
        trigger('iconRotate', [
            transition('false => true', [
                animate('0.3s ease', style({ transform: 'scale(1.2) rotate({{rotation}}deg)' }))
            ]),
            transition('true => false', [
                animate('0.3s ease', style({ transform: 'scale(1) rotate(0deg)' }))
            ])
        ])
    ]
})
export class LiveYourBooksComponent {
    readonly BookOpenIcon = BookOpen;
    readonly TargetIcon = Target;
    readonly ArrowRightIcon = ArrowRight;

    // Assets
    imgAIPoweredGrowth = 'AIPoweredGrowth.png';
    imgAIMentorChat = 'AI Mentor Chat.png';
    imgDashboardPlaceholder = 'Landing page.png';

    hoveredCard: string | null = null;
    hoveredChallenge: string | null = null;

    technicalChallenges = [
        {
            id: 'data-security',
            title: 'Data Security & Privacy',
            subtitle: 'Challenge: Protecting sensitive user journals.',
            description: 'Implemented field-level encryption for all journal entries. This ensures that user reflections remain private and secure at rest in the database.',
            shadowColor: 'rgba(17, 57, 255, 0.3)'
        },
        {
            id: 'ai-hallucination',
            title: 'AI Hallucination Management',
            subtitle: 'Challenge: Managing LLM inaccuracies.',
            description: 'Designed a transparent "Limitations & Risks" disclaimer modal. This manages user expectations regarding the accuracy of AI-generated advice.',
            shadowColor: 'rgba(239, 68, 68, 0.3)'
        },
        {
            id: 'prompt-engineering',
            title: 'Prompt Engineering',
            subtitle: 'Challenge: Inconsistent API responses.',
            description: 'Refined system prompts to enforce strict Markdown formatting. Engineered a custom parser to render AI outputs (lists, bolding) correctly in the UI.',
            shadowColor: 'rgba(16, 185, 129, 0.3)'
        },
        {
            id: 'resource-optimization',
            title: 'Resource Optimization',
            subtitle: 'Challenge: Server storage limits.',
            description: 'Pivoted from full file uploads to a title-based input system. This significantly reduced storage costs while maintaining sufficient context for the AI.',
            shadowColor: 'rgba(249, 115, 22, 0.3)'
        }
    ];

    setHovered(card: string | null) {
        this.hoveredCard = card;
    }

    setHoveredChallenge(challengeId: string | null) {
        this.hoveredChallenge = challengeId;
    }
}
