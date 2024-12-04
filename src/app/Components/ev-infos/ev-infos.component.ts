import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarefaService } from 'src/app/services/tarefa.service'; // Importe o TarefaService
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'app-ev-infos',
  templateUrl: './ev-infos.component.html',
  styleUrls: ['./ev-infos.component.css']
})
export class EvInfosComponent implements OnInit {
  evento: Evento | undefined; // Agora a variável evento é do tipo Evento, e não 'any'
  mostrarFormularioTarefa: boolean = false;
  novaTarefa: any = {
    nomeTarefa: '',
    fornecedor: '',
    valor: null
  };

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    const navigation = history.state; // Acessando o estado da navegação
    if (navigation && navigation.evento) {
      this.evento = navigation.evento; // Se o evento foi passado, atribui à variável
      console.log('Evento recebido:', this.evento);
    } else {
      console.error('Nenhum evento encontrado no estado de navegação');
    }
  }

  abrirFormularioTarefa() {
    this.mostrarFormularioTarefa = !this.mostrarFormularioTarefa;
  }

  cadastrarTarefa() {
    if (!this.novaTarefa.nomeTarefa || !this.novaTarefa.valor) {
      console.error("Nome da tarefa e valor são obrigatórios!");
      return;
    }

    const tarefaData = {
      nomeTarefa: this.novaTarefa.nomeTarefa,
      fornecedor: this.novaTarefa.fornecedor,
      valor: this.novaTarefa.valor,
      evento: { idEvento: this.evento?.idEvento } // Usando o idEvento do objeto evento
    };

    this.tarefaService.cadastrarTarefa(tarefaData).subscribe(response => {
      console.log('Tarefa cadastrada com sucesso', response);
      // Realizar algum procedimento após o sucesso (ex: atualizar lista de tarefas)
    }, error => {
      console.error('Erro ao cadastrar a tarefa', error);
    });
  }
}
