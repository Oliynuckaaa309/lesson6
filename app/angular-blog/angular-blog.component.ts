import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet, RouterModule } from '@angular/router';
import { IBlog } from '../interfase/blog.interfase';
import { BlogsService } from '../service/serviceBlog/blogs.service';
import { UsersService } from '../service/serviceUser/users.service';
import { IUsers } from '../interfase/users.interfase';


@Component({
  selector: 'app-angular-blog',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink,  RouterLinkActive, RouterOutlet, RouterModule ],
  templateUrl: './angular-blog.component.html',
  styleUrl: './angular-blog.component.css'
})
export class AngularBlogComponent {
 
public isAdmin:boolean=false;
public inAdmin:boolean=false;
public ifAddPost:boolean=false;
public email!:string;
public password!:string;
public adminPosts:IBlog[]=[];
public usersArrays:IUsers[]=[];
public title!:string;
public message1!:string;
public editStatus:boolean=false;
public editId!:number;

public userSignUp:boolean=false;
public userName:string='';
public userEmail!:string;
public userPassword!:string;
public userExisting:string='';
public inUser:boolean=false;
public expression:boolean=true;
public usern:string='';


constructor(
  private adminPost:BlogsService, private usersArray:UsersService 
){

}
ngOnInit(): void {
  this.getAccess();
    
  }
  getAccess():void{
    this.adminPosts=this.adminPost.blogs;
    this.usersArrays=this.usersArray.users;
  }

isOpenAdmin():void{
  this.isAdmin=true;
}
closeAdmin():void{
  this.isAdmin=false;
}
enterAdmin():void{
  if(this.email==="admin@gmail.com" && this.password){
    this.inAdmin=true;
    this.isAdmin=false;
  }
  
  this.email='';
  this.password='';
  this.expression=false;

}
signOut():void{
  this.inAdmin=false;
  this.expression=true;
  
  
}
singOutForUsers(){
  this.expression=true;
  this.inUser=false;
}
addPost():void{
  this.ifAddPost=true;
  this.message1='';
  this.title='';
  this.editStatus=false; 
 
}

closeAdd():void{
  this.ifAddPost=false;
}
postNewPost():void{

    const newPost={
      id:0,
      postedBy:this.inAdmin? 'admin':this.usern,
      topic:this.title,
      date:new Date(),
      message:this.message1
  
    }

    
    
    if(this.adminPosts.length>0){ 
      const id=this.adminPosts[0].id;
      newPost.id=id+1;
    }
    if(this.title!='' && this.message1!=''){
      this.adminPost.addPosts( newPost);
      this.title='';
      this.message1='';
      this.ifAddPost=false;
    }
  

 
 
}
editPost(item:IBlog):void{
  this.ifAddPost=true;
  this.title=item.topic;
  this.message1=item.message;
  this.editStatus=true;
  this.editId=item.id;
}
saveChanges():void{
  const updatePost={
    id:this.editId,
    postedBy: this.inAdmin? 'admin':this.usern,
    topic:this.title,
    date:new Date(),
    message:this.message1

  }
 
  this.adminPost.updatePosts(updatePost, this.editId);
  this.title=''; 
  this.message1='';
  this.ifAddPost=false;
}
deletePost(item:IBlog):void{
this.adminPost.deletePosts(item.id);

}
userSign():void{
  this.userSignUp=true;
}
closeSign():void{
  this.userSignUp=false;
}
submitUser():void{
  const newUser={
    id:2,
    username:this.userName,
    email:this.userEmail,
    password:this.userPassword

  }
  this.usern=newUser.username;
  
  if(this.usersArrays.length>0){
    const id=this.usersArrays.slice(-1)[0].id;
    newUser.id=id+1; 
  }
  if(this.userName!='' && this.userEmail!='' && this.userPassword!=''){
  this.userExisting=this.usersArray.addUsers(newUser);
  
   this.userName='';
  this.userEmail='';
  this.userPassword='';
 
  }
  this.expression=false;
  this.userSignUp=false;
  this.isAdmin=false;
  this.inUser=true;
  
}


}
