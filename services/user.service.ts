import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import firebase from "firebase";
import User = firebase.User;

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    private baseUrl = 'http://localhost:8222/api/v1/users'; // Assure-toi de mettre la bonne URL
    constructor(
        private http: HttpClient
    ) { }
    /***
     * Get All User
     */
    getAll() {
        return this.http.get<User[]>(`api/users`);
    }

    /***
     * Facked User Register
     */
    register(user: User) {
        return this.http.post(`/users/register`, user);
    }



}
