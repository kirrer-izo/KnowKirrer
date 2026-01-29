import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
 authService = inject(AuthService);
 router = inject(Router);

 formData = {
  email: '',
  password: ''
 };

 isLoading = false;

 onSubmit() {
  this.isLoading = true;

  this.authService.login(this.formData).subscribe({
    next: (response) => {
      //Success! Redirect to dashboard

      this.router.navigate(['/']);
    },
    error: (error) => {
      // failed invalid credentials
      alert('Login failed. Please check your email and password');
      this.isLoading = false;
    }
  })
 }

 onClose() {
  this.router.navigate(['/']);
 }


 
}
