import { AuthService } from './../auth.service';
import { BlogsService } from './../blogs.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HOMEComponent implements OnInit {

  constructor(private _BlogsService: BlogsService , private _AuthService:AuthService) { }

  allBlogs: any[] = [];
  userData:any='';

  ngOnInit(): void {

    this._BlogsService.getblogs().subscribe((response)=> {
      this.allBlogs = response;
      this.userData =this._AuthService.userData.getValue();
      console.log(this.allBlogs)

    })

  }


}
