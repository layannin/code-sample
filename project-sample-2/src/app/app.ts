import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Jsonplaceholder, JSONPlaceholderUser} from './Services/jsonplaceholder';
import {CommonModule} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: []
})
export class App {
  public users: JSONPlaceholderUser[] = [];
  public usersFiltered: JSONPlaceholderUser[] = [];
  public userName= new FormControl('',);
  constructor(private jsonPlaceholder: Jsonplaceholder, private formBuilder: FormBuilder) {
    this.jsonPlaceholder.getAllUsers().subscribe(
      users => {
        this.users = users;
        this.usersFiltered = users;
      }
    )
    this.userName.valueChanges.subscribe(
      (username: string | null) => {
        this.onChange(username);
      }
    )
  }

  public onChange(value: string | null){
    console.log(value);
    if(!!value){

      this.usersFiltered = this.users.filter(user => user.name.toLowerCase().includes(value.toLowerCase()));

    }
    else{
      this.usersFiltered = this.users;
    }
  }

}
