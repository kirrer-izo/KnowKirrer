import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pageAnimations } from '../../animations/page-animations';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { SkillsSectionComponent } from '../../components/skills-section/skills-section.component';
import { ProjectShowcaseComponent } from '../../components/project-showcase/project-showcase.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        HeaderComponent,
        FooterComponent,
        HeroSectionComponent,
        SkillsSectionComponent,
        ProjectShowcaseComponent
    ],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations: [pageAnimations]
})
export class HomeComponent { }
