import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  typeSenha: string = 'password';

  visibilidadeSenha(): void {
    this.typeSenha = this.typeSenha === 'password' ? 'text' : 'password';
  }

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }


  LoginForm = this.formBuilder.group({
    emailLogin: this.formBuilder.control('', [Validators.email, Validators.required, Validators.maxLength(50)]),
    senhaLogin: this.formBuilder.control('', [Validators.required, Validators.pattern('^(?!.*\\s).*$'), Validators.minLength(8), Validators.maxLength(50)])
  })

  onEnviar() {
    alert('funcionando')
  }
}
