import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
interface User {
  id: number;
  name: string;
  email: string;
}
@Injectable({
  providedIn: 'root',
})
export class CricketDataService {
  private playersUrl = 'assets/cricketer.json';
  constructor(private http: HttpClient) {}

  getPlayers(): Observable<User[]> {
    return this.http.get<User[]>(this.playersUrl);
  }
}
