import { CreateArticleService } from './../create-article.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-creat-blog',
  templateUrl: './creat-blog.component.html',
  styleUrls: ['./creat-blog.component.css']
})
export class CreatBlogComponent implements OnInit {
  error: string = "";
  articleForm: FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required]),
    body: new FormControl("", [Validators.required, Validators.minLength(20)]),
    tags: new FormControl("", [Validators.required]),
    img: new FormControl("", [Validators.required])
  })
  constructor(private _CreateArticleService: CreateArticleService, private _Router: Router) { }

  ngOnInit(): void {
  }

  submitArticleForm(articleForm: FormGroup) {
    if (articleForm.valid) {
      this._CreateArticleService.createNewArticle(articleForm.value).subscribe((res: any) => {
        alert('puplished ')
        this._Router.navigate(['home'])
      })
    }
  }
}
