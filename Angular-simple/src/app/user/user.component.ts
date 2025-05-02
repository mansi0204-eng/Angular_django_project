import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

    form: any = {
      data: {},
      message: '',
    }
  
    constructor(private httpClient: HttpClient) {
  
    }
  
    signUp() {
      this.httpClient.post('http://localhost:8000/ORSAPI/signup/', this.form.data).subscribe((res: any) => {
        console.log('res => ', res.result.message)
        this.form.message = res.result.message
      })
    }
}
