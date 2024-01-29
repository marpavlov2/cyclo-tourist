import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  get firstName() {
    return this.registerForm.get('firstName');
  }
  get lastName() {
    return this.registerForm.get('lastName');
  }
  get phone() {
    return this.registerForm.get('phone');
  }
  get city() {
    return this.registerForm.get('city');
  }
  get address() {
    return this.registerForm.get('address');
  }

  user: any;

  registerForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    phone: [''],
    city: [''],
    address: [''],
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  async ionViewWillEnter() {
    /*  this.user = await this.auth.getUser(); */
    if (this.user) {
      this.registerForm.patchValue({
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        city: this.user.city,
        address: this.user.address,
        phone: this.user.phone,
      });
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  async updateProfile() {
    const user = this.registerForm.value;
    user.firstName = this.capitalizeFirstLetter(user.firstName);
    user.lastName = this.capitalizeFirstLetter(user.lastName);
    user.city = this.capitalizeFirstLetter(user.city);
    user.address = this.capitalizeFirstLetter(user.address);
    /*     let isUpdated = await this.auth.updateUserProfile(user, true);
    if (isUpdated) {
      this.auth.getUser();
    } */
  }

  async logout() {
    /*     await this.storage.removeItem('authUser');
    await this.storage.removeItem('user');
    await this.storage.removeItem('customerPlayerId'); */
    this.router.navigate(['']);
  }
}
