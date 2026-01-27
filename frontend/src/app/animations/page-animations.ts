import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

export const pageAnimations = [
    // Stagger animation for children
    trigger('staggerAnimation', [
        transition(':enter', [
            query(':enter', [
                style({ opacity: 0, transform: 'translateY(30px)' }),
                stagger(200, [
                    animate('600ms cubic-bezier(0.22, 1, 0.36, 1)',
                        style({ opacity: 1, transform: 'translateY(0)' }))
                ])
            ], { optional: true })
        ])
    ]),

    // Fade in with upward motion
    trigger('fadeInUp', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            animate('600ms cubic-bezier(0.22, 1, 0.36, 1)',
                style({ opacity: 1, transform: 'translateY(0)' }))
        ])
    ]),

    // Slide in from left
    trigger('slideInLeft', [
        transition(':enter', [
            style({ opacity: 0, transform: 'translateX(-30px)' }),
            animate('800ms 300ms cubic-bezier(0.22, 1, 0.36, 1)',
                style({ opacity: 1, transform: 'translateX(0)' }))
        ])
    ]),

    // Scale in
    trigger('scaleIn', [
        transition(':enter', [
            style({ opacity: 0, transform: 'scale(0.8)' }),
            animate('800ms 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                style({ opacity: 1, transform: 'scale(1)' }))
        ])
    ]),

    // Fade in
    trigger('fadeIn', [
        transition(':enter', [
            style({ opacity: 0 }),
            animate('600ms 800ms ease', style({ opacity: 1 }))
        ])
    ]),

    // Pulse animation for skill icons
    trigger('pulse', [
        transition(':enter', [
            animate('2500ms', style({
                opacity: 1, // Angular animations can't use * for CSS vars easily, sticking to opacity/scale
                transform: 'scale(1)'
            }))
        ])
    ]),

    // Scale X for separator line
    trigger('scaleX', [
        transition(':enter', [
            style({ transform: 'scaleX(0)' }),
            animate('800ms ease-out', style({ transform: 'scaleX(1)' }))
        ])
    ])
];
