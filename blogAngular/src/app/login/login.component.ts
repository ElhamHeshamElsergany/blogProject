import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _AuthService: AuthService, private _Router: Router) { }

  fieldTextType: boolean= false;
  error: string = "";
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    password: new FormControl(null, [Validators.required
    ])
  });

  ngOnInit(): void {
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  submitloginForm(loginForm: FormGroup) {
    console.log(loginForm.value)
    if (this.loginForm.valid) {
      this._AuthService.login(this.loginForm.value)
        .subscribe((res: any) => {
          localStorage.setItem('userToken', res.token)
          this._AuthService.saveUserData()
          this._Router.navigate(['home'])
        })
    }
  }
}
