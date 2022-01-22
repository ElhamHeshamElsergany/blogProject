import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor(private _HttpClient:HttpClient) { }
  
  getblogs():Observable<any>
  {
    return this._HttpClient.get(`http://localhost:3000/blog`)
  }
  getBlogsByid(id:any):Observable<any>
  {
    return this._HttpClient.get(`http://localhost:3000/blog/${id}`)
  }
}
