import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {USER_BY_USERNAME_AND_PASSWORD_URL} from "../shared/constants/urls";
import {User} from "../shared/models/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUserByUsernameAndPassword(): Observable<User>{
    return this.http.get<User>(USER_BY_USERNAME_AND_PASSWORD_URL);
  }
}
