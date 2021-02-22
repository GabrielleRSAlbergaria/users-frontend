import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { RequestUser, ResponseUser, ResponseUsers } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlGetAll = 'http://localhost:8080/api/users';
  private url = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.urlGetAll);
  }

  createUser(request: RequestUser): Observable<ResponseUser>{
    return this.http.post<ResponseUser>(this.url, request);
  }
  getUser(email: string): Observable<ResponseUser>{
    const urlGetId = `${this.url}/email/${email}`;
    return this.http.get<ResponseUser>(urlGetId);
  }
  updateUser(email: string, request: RequestUser): Observable<ResponseUser>{
    const urlUpdate = `${this.url}/update/${email}`;
    return this.http.put<ResponseUser>(urlUpdate, request);
  }
  deleteUser(email: string): Observable<any>{
    const urlUpdate = `${this.url}/${email}`;
    return this.http.delete<ResponseUser>(urlUpdate);
  }
}
