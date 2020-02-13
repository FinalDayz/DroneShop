import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../modals/Account";
import {FeedbackService} from "../feedback.service";
import {LoginService} from "../shared/login.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router,
              private feedbackService: FeedbackService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.registerForm = new FormGroup( {
      accountEmail: new FormControl('', [Validators.email]),
      accountPassword: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required]),
    }, [Validators.required, Validators.maxLength(50)]);
  }

  submit() {
    var formVal = this.registerForm.value;
    if(formVal.accountPassword !== formVal.repeatPassword) {
      this.feedbackService.showInfoMessage("Wachtwoorden komen niet overeen");
      return;
    }

    let account = {
      accountEmail: formVal.accountEmail,
      accountPassword: formVal.accountPassword
    };

    this.loginService.register(account).subscribe(response => {
        console.log(response);
        this.router.navigate(["/login"]).then(res => {
        this.feedbackService.showInfoMessage("Account aangemaakt, u kunt nu inloggen");
      });
    },
      error => {
        console.log(error);
        if(error.error && typeof error.error === "string") {
          this.feedbackService.showInfoMessage(error.error);
        } else {
          this.feedbackService.showInfoMessage("Registreren is niet gelukt");
        }
      });
  }
}
