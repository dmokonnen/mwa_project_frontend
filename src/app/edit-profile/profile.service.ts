import { Observable } from "rxjs/index";
import { ApiResponse } from './api.response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class ProfileService {


    constructor(private http: HttpClient) { }
    baseUrl: string = 'http://localhost:3000/users/';

    getUserById(id: string): Observable<ApiResponse> {
        return this.http.get<ApiResponse>(this.baseUrl + id);
      }

    updateUser(user){
        console.log("UPDATE STARTED: INDIDE SERVICE"); 
        console.log(this.baseUrl +'edit-user'+user._id); 

        return this.http.put(this.baseUrl +'edit-user'+user._id, user);
      }

}
