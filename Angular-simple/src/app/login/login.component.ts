import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) {

  }

  signIn() {
    console.log('in sign in function')
    console.log('form.data:', this.form.data)
    

    if (this.form.data.loginId == 'admin' && this.form.data.password == 'admin') {
      this.router.navigateByUrl('welcome')
    } else {
      this.form.message = 'Login ID & Password Invalid'
    }
  }

  signUp() {
    this.router.navigateByUrl('signup')
  }

}
