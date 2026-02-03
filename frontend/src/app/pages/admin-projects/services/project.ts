import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8000/api/projects';

  private getHeaders() {
    const token = localStorage.getItem('auth_token');

    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    }
  }

    getProjects() {
    return this.http.get(`${this.apiUrl}`);
    }

  getProject(id: number) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createProject(project: any) {
    return this.http.post(`${this.apiUrl}`, project, this.getHeaders());
  }

  editProject(project: any) {
    return this.http.put(`${this.apiUrl}/${project.id}`, project, this.getHeaders());
  }

  deleteProject(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHeaders());
  }
  
}
