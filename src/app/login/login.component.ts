import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../shared/login.service";
import {AccountService} from "../shared/account.service";
import {Account} from "../modals/Account";
import {Router} from "@angular/router";
import {FeedbackMessageService} from "../feedback-message.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginForm: FormGroup;

  constructor(private loginService: LoginService, private accountService: AccountService,
              private router: Router, private feedbackService: FeedbackMessageService) { }

  submit() {
    this.loginService.validLogin(this.loginForm.value).subscribe((result: Account) => {
      this.accountService.setLoggedIn(result);
      this.router.navigate(["/products"]).then(res => {
        this.feedbackService.showInfoMessage("Logged in as " + result.accountEmail);
      });
    },
      error => {
       this.feedbackService.showInfoMessage("Login incorrect");
      });
  }

  ngOnInit() {
    this.loginForm = new FormGroup( {
      accountEmail: new FormControl('', [Validators.email]),
      accountPassword: new FormControl()
    }, [Validators.required, Validators.maxLength(50)]);
  }

}
