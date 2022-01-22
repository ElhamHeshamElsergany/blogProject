import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateArticleService {

  constructor(private _HttpClient:HttpClient, private _Router:Router ) { }


  createNewArticle(body: object):Observable<any>  {
    return this._HttpClient.post(`http://localhost:3000/blog/create`, body)
  }

  // createNewImg(profile: object):Observable<any>  {
  //   console.log(profile,'pro')
  //   return this._HttpClient.post(`http://localhost:3000/blog/upload`,profile)
  // }

}
