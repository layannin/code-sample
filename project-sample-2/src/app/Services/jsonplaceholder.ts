import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
export interface JSONPlaceholderAddress{
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
}
export interface JSONPlaceholderCompany{
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface JSONPlaceholderUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: JSONPlaceholderAddress;
  company: JSONPlaceholderCompany;
}
@Injectable({
  providedIn: 'root'
})
export class Jsonplaceholder {
  private url = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }

  public getAllUsers(): Observable<JSONPlaceholderUser[]>
  {
    return this.http.get<JSONPlaceholderUser[]>(this.url+'/users');
  }
}
