import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Login } from './class/login';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AuthSession } from 'src/app/shared/utils/auth-session';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  authForm!: FormGroup;
  login?: Login;

  get email() { return this.authForm.get("email") }
  get password() { return this.authForm.get("password") }

  constructor(private router: Router, private fb: FormBuilder, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.configureForm()
  }
  singIn(){ //COMO NÃO VOU SUBIR API AQUI VOU FORÇA PARA ELE NÃO VALIDAR O LOGIN
    this.login = this.authForm.value
    if (this.login?.email && this.login.password) {
    //   this.authenticationService.singIn(this.login).subscribe({
    //     next: (auth) => {
    //       if (auth) {
    //         AuthSession.createAuthenticationSession(auth);
    //         this.router.navigate(['/'])
    //       }
    //     },
    //     error: (e: HttpErrorResponse) => Swal.fire({title: 'Error', html: `${e.error.messages.join('<br />')}`, icon: 'error'}),
    // })


      this.router.navigate(['/'])
  

    }
  }
   configureForm(){
    this.authForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
   }

}
