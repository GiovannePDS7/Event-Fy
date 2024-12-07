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
    valor: null,
  };
  tarefas: any[] = [];  // Adicionando a variável para armazenar as tarefas
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  fecharFormulario() {
    this.mostrarFormularioTarefa = false;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    const navigation = history.state; // Acessando o estado da navegação
    if (navigation && navigation.evento) {
      this.evento = navigation.evento; // Se o evento foi passado, atribui à variável
      console.log('Evento recebido:', this.evento);
      // Buscar as tarefas para o evento ao carregar o componente
      if (this.evento?.idEvento) {
        this.carregarTarefas(this.evento.idEvento);
      }
    } else {
      console.error('Nenhum evento encontrado no estado de navegação');
    }
  }

  // Método para carregar as tarefas do evento
  carregarTarefas(idEvento: number): void {
    this.tarefaService.listarTarefasPorEvento(idEvento).subscribe(response => {
      this.tarefas = response;  // Atribui as tarefas recebidas à variável 'tarefas'
      console.log('Tarefas carregadas:', this.tarefas);
    }, error => {
      console.error('Erro ao carregar as tarefas', error);
    });
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
      idEvento: this.evento?.idEvento
    };

    this.tarefaService.cadastrarTarefa(tarefaData).subscribe(response => {
      console.log('Tarefa cadastrada com sucesso', response);
      this.fecharFormulario();
      // Atualizar a lista de tarefas após o cadastro
      if (this.evento?.idEvento) {
        this.carregarTarefas(this.evento.idEvento);
      }
    }, error => {
      console.error('Erro ao cadastrar a tarefa', error);
    });
  }
}
