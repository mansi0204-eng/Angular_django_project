import { Component } from '@angular/core';
import { HttpServiceService } from '../service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  form: any = {
    data: {},
    message: '',
  }

  constructor(private httpService: HttpServiceService) {

  }

  signUp() {
    var self = this;
    this.httpService.post('http://localhost:8000/ORSAPI/signUp/', this.form.data, function (res: any) {
      console.log('res => ', res.data.message)
      self.form.message = res.data.message
    })
  }

}
