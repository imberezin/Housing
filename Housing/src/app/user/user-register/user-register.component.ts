import { User } from './../../model/user';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder , Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  public registrationForm!: FormGroup;

  public user!: User;

  public userSubmitted: boolean = false;

  constructor(private fb: FormBuilder , private userService: UserService) { }

  ngOnInit(): void {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl('Mark',Validators.required),
    //   email: new FormControl(null,[Validators.required, Validators.email]),
    //   password: new FormControl(null,[Validators.required, Validators.minLength(4)]),
    //   confirmPassword: new FormControl(null,[Validators.required]),
    //   mobile: new FormControl(null,[Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);

    this.createRegistrationForm();
  }

  createRegistrationForm(): void {
    this.registrationForm= this.fb.group({
      userName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4)]],
      confirmPassword: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.maxLength(10)]]
    },{validators: this.passwordMatchingValidator})
  }

  passwordMatchingValidator(fg: AbstractControl){
    let password = fg.get('password')?.value;
    let confirmPassword = fg.get('confirmPassword')?.value;

    return password === confirmPassword ? null : {notmatched: true};
  }


   matchPassword(abstractControl: AbstractControl) {
    let password = abstractControl.get('password')?.value;
    let confirmPassword = abstractControl.get('confirmPassword')?.value;
    console.log(password);
    console.log(confirmPassword);

     if (password != confirmPassword) {
         abstractControl.get('confirmPassword')?.setErrors({
           MatchPassword: true
         });
         abstractControl.get('registrationForm')?.setErrors({
          MatchPassword: true
        });

         return null
    } else {
      return null
    }

  }

  submit(): void{
    console.log(this.registrationForm);
    this.userSubmitted = true;
    if (this.registrationForm.valid){
    //  this.user = Object.assign(this.user, this.registrationForm.value);
     this.userService.addUser(this.userData());
     this.registrationForm.reset();
     this.userSubmitted = false;
    }

  }

  userData(): User{
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    }
  }
  // Getters

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
}
