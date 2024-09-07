import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly baseUrl = "assets/data.json";

  constructor(private http: HttpClient) { }

  public getArticles(): Observable<Array<Article>> {
    return this.http.get<Article[]>(this.baseUrl);
  }
}
