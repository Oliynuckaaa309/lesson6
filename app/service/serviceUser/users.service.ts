import { Injectable } from '@angular/core';
import {IUsers} from './../../interfase/users.interfase'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public errorMessage!:string;
  public users:Array<IUsers>=[
    {
     id:1,
     username:'Oliynuchkaaa',
     email:'oliynuchkaaa@gmai.com',
     password:'11111111'

    }
  ]
  addUsers(user:IUsers ):string{
    let errorMessage = '';
    this.users.forEach(existingUser => {
      if(user.email === existingUser.email || user.username=== existingUser.username ){
        errorMessage = 'Such user exists';
      }
    })
    
     if(errorMessage===''){
      this.users.push(user);
    }
      
    return errorMessage;
    }

  constructor() { }
}
