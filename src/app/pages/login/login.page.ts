import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, , Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    console.log('ngOnInit');
  }

  async navigateToRegisterPage() {}

  async login() {}

  async loginWithFacebook() {}
}
