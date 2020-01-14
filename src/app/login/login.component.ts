import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../shared/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private loginService: LoginService) { }

  clickedLogin() {
    this.loginService.validLogin(this.loginForm.value).subscribe(result => {
      console.log("result");
    });
  }

  ngOnInit() {
    this.loginForm = new FormGroup( {
      email: new FormControl('', [Validators.email]),
      password: new FormControl()
    }, [Validators.required, Validators.maxLength(50)]);
  }

}
