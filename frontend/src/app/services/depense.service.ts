import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Depense } from '../models/depense.model';

const baseUrl = 'http://localhost:8080/api/depenses';

// ce service permet de faire le lien entre le front et le back en utilisant les méthodes HTTP (get, post, put, delete)

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Depense[]> {
    return this.http.get<Depense[]>(baseUrl);
  }

  get(id: any): Observable<Depense> {
    return this.http.get<Depense>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Depense[]> {
    return this.http.get<Depense[]>(`${baseUrl}?title=${title}`);
  }
}