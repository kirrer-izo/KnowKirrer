import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Users, Target, ArrowRight } from 'lucide-angular';
import { pageAnimations } from '../../animations/page-animations';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BrowserFrameComponent } from '../../components/browser-frame/browser-frame.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-sole-proprietor-crm',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        LucideAngularModule,
        HeaderComponent,
        FooterComponent,
        BrowserFrameComponent
    ],
    templateUrl: './sole-proprietor-crm.component.html',
    styleUrls: ['./sole-proprietor-crm.component.scss'],
    animations: [
        pageAnimations,
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
export class SoleProprietorCRMComponent {
    readonly UsersIcon = Users;
    readonly TargetIcon = Target;
    readonly ArrowRightIcon = ArrowRight;

    // Assets
    imgDashboard = 'CRMDashboard.png';
    imgCommandCenter = 'CommandCenter.png';
    imgClientDirectory = 'Customer List.png';
    imgInvoicing = 'Invoicing.png';

    hoveredCard: string | null = null;

    setHovered(card: string | null) {
        this.hoveredCard = card;
    }
}
