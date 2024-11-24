import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-criacao',
  templateUrl: './formulario-criacao.component.html',
  styleUrls: ['./formulario-criacao.component.css']
})
export class FormularioCriacaoComponent {
 hoje = new Date().toISOString().split('T')[0];

  constructor(
    private formBuilder: FormBuilder, 
    private http: HttpClient, 
    private router: Router
  ) { }
  
  CadastroEventoForm = this.formBuilder.group({
    nomeEvento: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(45)]), // Corrigido maxLength para 45
    dataEvento: this.formBuilder.control(this.hoje, [Validators.required]),
    horarioInicio: this.formBuilder.control('', [Validators.required]),
    horarioFim: this.formBuilder.control('', [Validators.required]),
    localEvento: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(300)]),
    tipoEvento: this.formBuilder.control(''),
    incluirTarefas: this.formBuilder.control(false), 
    listaConvidados: this.formBuilder.control(false), 
    fornecedores: this.formBuilder.control(false) 
  });

  onEnviar() {

    this.CadastroEventoForm.markAllAsTouched();
    if (this.CadastroEventoForm.valid) {
      alert('Formulário enviado com sucesso!');
      console.log(this.CadastroEventoForm.value);
      // Aqui você pode adicionar a lógica para enviar os dados ao backend
    } else {
      alert('Por favor, preencha os campos corretamente.');
    }
  }
}
