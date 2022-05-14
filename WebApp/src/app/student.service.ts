import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  readonly baseUrl: string = "https://localhost:5001";

  constructor(private _http: HttpClient) { 
    
  }

  getAllStudents(): Observable<Student[]> {
    return this._http.get<Student[]>(this.baseUrl + "/student");
  }
  getAllPlayers(): Observable<Player[]> {
return this._http.get<Player[]>("https://teameastbasketball.azurewebsites.net/players");
  }
}
