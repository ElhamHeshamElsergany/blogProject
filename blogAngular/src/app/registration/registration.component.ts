import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  error: string = "";

  registerForm: FormGroup = new FormGroup({
    FirstName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    LastName: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    username: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    Email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(`^[A-Z][a-z]{2,}$`)])
  });
  constructor(public _AuthService: AuthService, private _Router: Router) { }

  ngOnInit(): void {

  }
  submitRegisterForm(registerForm: FormGroup) {
    console.log(registerForm.value)
    if (this.registerForm.valid) {
      this._AuthService.register(this.registerForm.value)
        .subscribe((res: any) => {
          alert('success Logup')
          this._Router.navigate(['login'])

        })
    }
  }
}
