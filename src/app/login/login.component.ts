import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../shared/login.service";
import {AccountService} from "../shared/account.service";
import {Account} from "../modals/Account";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private loginService: LoginService, private accountService: AccountService) { }

  submit() {
    this.loginService.validLogin(this.loginForm.value).subscribe((result: Account) => {
      this.accountService.setLoggedIn(result);
    });
  }

  ngOnInit() {
    this.loginForm = new FormGroup( {
      accountEmail: new FormControl('', [Validators.email]),
      accountPassword: new FormControl()
    }, [Validators.required, Validators.maxLength(50)]);
  }

}
