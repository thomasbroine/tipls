import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Depense } from '../models/depense.model';
import { tap } from 'rxjs/operators';

const baseUrl = 'http://localhost:8080/api/depenses';

@Injectable({
  providedIn: 'root'
})
export class DepenseService {
  private depensesSubject = new BehaviorSubject<Depense[]>([]);
  depenses$ = this.depensesSubject.asObservable();

  constructor(private http: HttpClient) { 
    this.refreshDepenses();
  }

  refreshDepenses() {
    this.getAll().subscribe(depenses => {
      this.depensesSubject.next(depenses);
    });
  }

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
    return this.http.delete(`${baseUrl}/${id}`).pipe(tap(() => {
      this.refreshDepenses();
    }));
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Depense[]> {
    return this.http.get<Depense[]>(`${baseUrl}?title=${title}`);
  }
}