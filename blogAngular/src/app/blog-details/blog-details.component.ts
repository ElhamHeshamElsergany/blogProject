import { BlogsService } from './../blogs.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  id: String = "";
  blogDetails: any = {}
  constructor(private _ActivatedRoute: ActivatedRoute, private _BlogsService: BlogsService) { }

  ngOnInit(): void {

    this.id = this._ActivatedRoute.snapshot.params.id;
    console.log(this.id);
    this._BlogsService.getBlogsByid(this.id).subscribe((res) => {
      this.blogDetails = res;
      console.log(res)

    })

  }

}
