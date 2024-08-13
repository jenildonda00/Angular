import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://openlibrary.org/search.json?'; // Open Library API

  constructor(private http: HttpClient) {}

  getData(title: string): Observable<any> {
    const url = `${this.apiUrl}title=${encodeURIComponent(title)}`;
  console.log('Fetching URL:', url);
    return this.http.get(this.apiUrl + 'title=' + title);
  }
}
