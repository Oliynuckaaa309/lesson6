import { Injectable } from '@angular/core';
import { IBlog} from '../../interfase/blog.interfase'
@Injectable({
  providedIn: 'root'
})
export class BlogsService {
  public dateFor:Date| number=new Date();
  public blogs:Array<IBlog>=[
   
  ]
addPosts(post:IBlog):void{
  this.blogs.push(post);
  
}
updatePosts(post:IBlog, id:number):void{
  const index=this.blogs.findIndex(post=>post.id===id);
  this.blogs.splice(index, 1, post);

}
deletePosts( id:number):void{
  const index=this.blogs.findIndex(post=>post.id=id-1);
  this.blogs.splice(index, 1);

}
  constructor() { }
}
