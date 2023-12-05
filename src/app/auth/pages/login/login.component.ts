import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PATTERN } from 'src/app/models/patterns/patterns';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private servicio: AuthService , private router: Router ){
    this.loginForm = this.fb.group({
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(15), Validators.pattern(PATTERN.password)])
    })
  }

  get correoControl(){
    return this.loginForm.controls['correo']
  }
  get passwordControl(){
    return this.loginForm.controls['password']
  }

  login(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.router.navigate(['dashboard/home'])
      this.servicio.login(this.loginForm.getRawValue());
       
    }
  }

}
