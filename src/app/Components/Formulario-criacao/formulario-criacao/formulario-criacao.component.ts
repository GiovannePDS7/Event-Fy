import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-criacao',
  templateUrl: './formulario-criacao.component.html',
  styleUrls: ['./formulario-criacao.component.css']
})
export class FormularioCriacaoComponent {
  hoje = new Date();

  apiUrl : string = 'http://localhost:8082'  
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    
  }

  CadastroEventoForm = this.formBuilder.group({
    nomeEvento: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
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
    // Marca todos os campos como tocados (para validação)
    this.CadastroEventoForm.markAllAsTouched();

    if (this.CadastroEventoForm.valid) {
      const idOrganizador = localStorage.getItem('id'); // Obtém o id do localStorage

      if (idOrganizador) {
        const eventoData = {
          ...this.CadastroEventoForm.value,
          idOrganizador: idOrganizador // Passa o idOrganizador no corpo da requisição
        };

        this.http.post(`${this.apiUrl}/eventos/criarEvento?idOrganizador=${idOrganizador}`, eventoData)
          .subscribe(
            (response) => {
              alert('Evento criado com sucesso!');
              console.log(response);
            },
            (error) => {
              alert('Erro ao criar o evento.');
              console.error(error);
            }
          );
      } else {
        alert('Organizador não encontrado no localStorage.');
      }
    } else {
      alert('Por favor, preencha os campos corretamente.');
    }
  }
}