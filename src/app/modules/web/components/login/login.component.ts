import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../../services/authentication/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  private validateEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private toastrService: ToastrService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern(this.validateEmail)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(7),
      ]]
    });
  }

  login(): void {
    console.log(this.loginForm.value);
    this.authService.login('login/', {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).subscribe(res => {
      console.log(res);
      if (res == null) {
        this.toastrService.info('Usuario no encontrado.', 'Credenciales incorrectas', {
          timeOut: 1300,
          progressBar: true
        });
      } else {
        this.toastrService.success('Iniciando, un momento por favor.', 'Sesión iniciada.', {
          timeOut: 1300,
          progressBar: true
        });
        localStorage.setItem('token', res.token);
        this.router.navigate(['/app']);
      }
    }, error => {
      console.log(error);
      this.toastrService.error('', 'Error con el servidor', {
        timeOut: 1300,
        progressBar: true
      });
    });
    this.loginForm.reset();
  }

  // getters del loginForm
  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

}
