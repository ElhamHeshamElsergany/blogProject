import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { BlogsComponent } from './blogs/blogs.component';
import { CreatBlogComponent } from './creat-blog/creat-blog.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HOMEComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',redirectTo:'home' , pathMatch:'full'},
  {path:'register',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'home', canActivate:[AuthGuard] ,component:HOMEComponent},
  {path:'articleDetails/:id', canActivate:[AuthGuard] ,component:BlogDetailsComponent},
  {path:'creatBlog', canActivate:[AuthGuard] ,component:CreatBlogComponent},
  {path:'myBlogs',canActivate:[AuthGuard] , component:BlogsComponent},
  {path:'contact', canActivate:[AuthGuard] , component:ContactComponent},
  {path:'**',component:NotFoundComponent}
  // articleDetails
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
