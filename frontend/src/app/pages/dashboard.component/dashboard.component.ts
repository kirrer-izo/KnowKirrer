import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  private authservice = inject(AuthService);
  private router = inject(Router);

  logout() {
    this.authservice.logout();

    this.router.navigate(['/login']);
  }
 
}
