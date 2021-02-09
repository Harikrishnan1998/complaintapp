import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../services/customvalidation.service';
import { SignupserviceService } from '../signupservice.service'
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  registerForm: FormGroup|any;
  submitted = false;
  constructor( private _router:Router ,private signupService: SignupserviceService, private fb: FormBuilder,
    private customValidator: CustomvalidationService,public _auth: AuthService)  { }
  
    
  ngOnInit(){
    
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }
  
  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!.');
      console.table(this.registerForm.value);
       this.signupService.getSignup(this.registerForm.value)
      this._router.navigate(['/userlogin'])
    }
  }
}
  