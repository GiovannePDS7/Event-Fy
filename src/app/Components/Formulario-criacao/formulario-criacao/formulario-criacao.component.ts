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

  // apiUrl : string = 'http://localhost:8082';
  apiUrl: string = 'https://cadastroeventoeventfy-production.up.railway.app'
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  CadastroEventoForm = this.formBuilder.group({
    nomeEvento: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(45)]),
    dataEvento: this.formBuilder.control(this.hoje, [Validators.required]),
    horarioInicio: this.formBuilder.control('', [Validators.required]),
    horarioFim: this.formBuilder.control('', [Validators.required]),
    localEvento: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(300)]),
    tipoEvento: this.formBuilder.control('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    incluirTarefas: this.formBuilder.control(false),
    listaConvidados: this.formBuilder.control(false),
    fornecedores: this.formBuilder.control(false)
  });

  onCheckboxChange(controlName: string, event: Event): void {
    const input = event.target as HTMLInputElement;
    this.CadastroEventoForm.get(controlName)?.setValue(input.checked);
  }
  onEnviar() {
    // Marca todos os campos como tocados (para validação)
    this.CadastroEventoForm.markAllAsTouched();

    if (this.CadastroEventoForm.valid) {
        console.table(this.CadastroEventoForm.value);
        const idOrganizador = localStorage.getItem('organizadorId'); // Obtém o id do localStorage

        if (idOrganizador) {
            const eventoData = {
                ...this.CadastroEventoForm.value
            };

            // Adiciona o idOrganizador como parâmetro na URL
            const url = `${this.apiUrl}/eventos/criarEvento?idOrganizador=${idOrganizador}`;

            this.http.post(url, eventoData)
                .subscribe(
                    (response: any) => {
                        this.router.navigate(['/eventoExistente']);
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
