import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api';

  private getHeaders() {
    const token = localStorage.getItem('auth_token');

    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
  }

  getProjects() {
    return this.http.get(`${this.apiUrl}/projects`);
  }

  getTechStacks() {
    return this.http.get(`${this.apiUrl}/techstacks`)
  }

  getProject(id: number) {
    return this.http.get(`${this.apiUrl}/projects/${id}`);
  }

  createProject(project: any) {
    return this.http.post(`${this.apiUrl}/projects`, project, this.getHeaders());
  }

  editProject(project: any) {
    return this.http.put(`${this.apiUrl}/projects/${project.id}`, project, this.getHeaders());
  }

  deleteProject(id: number) {
    return this.http.delete(`${this.apiUrl}/projects/${id}`, this.getHeaders());
  }
  
}
