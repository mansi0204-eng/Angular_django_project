import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: any = {
    data: {},
    message: '',
  }

  constructor(private httpService: HttpServiceService, public router: Router) {

  }

  signIn() {
    var self = this;
    this.httpService.post('http://localhost:8000/ORSAPI/login/', this.form.data, function (res: any) {
      console.log('res => ', res)
      self.form.message = '';

      if (res.result.message) {
        self.form.message = res.result.message;
      }

      if (res.result.data != null) {
        localStorage.setItem('firstName', res.result.data.firstName)
        self.router.navigateByUrl('welcome');
      }
    })
  }

  signUp() {
    this.router.navigateByUrl('signup');
  }
}