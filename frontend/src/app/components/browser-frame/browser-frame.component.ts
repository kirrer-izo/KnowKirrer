import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-browser-frame',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './browser-frame.component.html',
    styleUrls: ['./browser-frame.component.scss']
})
export class BrowserFrameComponent {
    @Input() screenshotUrl?: string;
    @Input() alt: string = '';
}
