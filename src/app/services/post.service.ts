import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Posts } from '../interfaces/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {
//se crea una variabal api
private api='https://jsonplaceholder.typicode.com';
  constructor(
      private   http:HttpClient
  ) { }
  getAllPosts(){
    const path='https://jsonplaceholder.typicode.com/posts';
    return this.http.get<Posts[]>(path);
}
//se consulta para un solo post
getPost(id: string){
  const path=`${this.api}/posts/${id}`;
  return this.http.get<Posts[]>(path);
}



}

