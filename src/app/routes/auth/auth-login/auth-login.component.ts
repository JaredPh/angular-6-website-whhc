import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from '../../../components/shared/elements/page-loader/page-loader.service';
import { AuthService } from '../../../components/auth/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';

@Component({
  selector: 'whhc-auth-login',
  templateUrl: './auth-login.component.html',
})
export class AuthLoginComponent implements OnInit {

  private emailCtrl: FormControl;
  private passwordCtrl: FormControl;

  public loginForm: FormGroup;

  public errorType: string;

  constructor(
    private pageLoader: PageLoaderService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.emailCtrl = new FormControl('', [
      Validators.required,
      Validators.maxLength(128),
      CustomValidators.email,
    ]);

    this.passwordCtrl = new FormControl('', [
      Validators.required,
    ]);
  }

  ngOnInit() {
    this.pageLoader.clear();

    this.loginForm = this.formBuilder.group({
      Email: this.emailCtrl,
      Password: this.passwordCtrl,
    });
  }

  public async sendForm(event) {
    event.stopPropagation();
    event.preventDefault();
    this.errorType = null;

    const loginResponse = await this.authService.authenticate(this.emailCtrl.value, this.passwordCtrl.value);

    switch (loginResponse) {
      case 'success':
        this.router.navigateByUrl('/members');
        this.errorType = null;
        break;
      case 'UnknownError':
      case 'InvalidParameterException':
      case 'UserNotFoundException':
      default:
        this.errorType = loginResponse;
    }
  }

}
