import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getArticles() {
    return this.http.get(`${environment.api}all-articles`);
  }

  getAllArticles() {
    return this.http.get(`${environment.api}articles`);
  }

  getReports() {
    return this.http.get(`${environment.api}reports`);
  }

  removeArticle(id: String) {
    return this.http.post(`${environment.api}delete-article`, { id });
  }

  removeReports(id: String) {
    return this.http.post(`${environment.api}delete-report`, { id });
  }

  acceptArticle(id: String) {
    return this.http.post(`${environment.api}accept-article`, {
      id,
    });
  }
}
