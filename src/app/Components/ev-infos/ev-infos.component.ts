import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/services/tarefa.service'; // Serviço para tarefas
import { ConvidadosService } from 'src/app/services/convidados.service'; // Serviço para convidados
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'app-ev-infos',
  templateUrl: './ev-infos.component.html',
  styleUrls: ['./ev-infos.component.css']
})
export class EvInfosComponent implements OnInit {
  evento: Evento | undefined;
  tarefas: any[] = [];
  convidados: any[] = [];

  // Controle de exibição de formulários
  mostrarFormularioTarefa: boolean = false;
  mostrarFormularioConvidado: boolean = false;

  // Dados para novas entradas
  novaTarefa = {
    nomeTarefa: '',
    fornecedor: '',
    valor: null
  };
  novoConvidado = {
    nomeConvidado: '',
  };

  constructor(
    private tarefaService: TarefaService,
    private convidadosService: ConvidadosService // Injeta o serviço de convidados
  ) { }

  ngOnInit(): void {
    const navigation = history.state;
    if (navigation && navigation.evento) {
      this.evento = navigation.evento;
      console.log('Evento recebido:', this.evento);
      if (this.evento?.idEvento) {
        this.carregarTarefas(this.evento.idEvento);
        this.carregarConvidados(this.evento.idEvento);
      }
    } else {
      console.error('Nenhum evento encontrado no estado de navegação');
    }
  }

  carregarTarefas(idEvento: number): void {
    this.tarefaService.listarTarefasPorEvento(idEvento).subscribe(
      response => {
        this.tarefas = response;
        console.log('Tarefas carregadas:', this.tarefas);
      },
      error => {
        console.error('Erro ao carregar as tarefas', error);
      }
    );
  }

  carregarConvidados(idEvento: number): void {
    this.convidadosService.listarConvidadosPorEvento(idEvento).subscribe(
      response => {
        this.convidados = response;
        console.log('Convidados carregados:', this.convidados);
      },
      error => {
        console.error('Erro ao carregar os convidados', error);
      }
    );
  }

  abrirFormularioTarefa(): void {
    this.mostrarFormularioTarefa = !this.mostrarFormularioTarefa;
  }

  fecharFormularioTarefa(): void {
    this.mostrarFormularioTarefa = false;
  }

  cadastrarTarefa(): void {
    if (!this.novaTarefa.nomeTarefa || !this.novaTarefa.valor) {
      console.error('Nome da tarefa e valor são obrigatórios!');
      return;
    }

    const tarefaData = {
      ...this.novaTarefa,
      idEvento: this.evento?.idEvento
    };

    this.tarefaService.cadastrarTarefa(tarefaData).subscribe(
      response => {
        console.log('Tarefa cadastrada com sucesso', response);
        this.fecharFormularioTarefa();
        if (this.evento?.idEvento) {
          this.carregarTarefas(this.evento.idEvento);
        }
      },
      error => {
        console.error('Erro ao cadastrar a tarefa', error);
      }
    );
  }

  abrirFormularioConvidado(): void {
    this.mostrarFormularioConvidado = !this.mostrarFormularioConvidado;
  }

  fecharFormularioConvidado(): void {
    this.mostrarFormularioConvidado = false;
  }

  cadastrarConvidado(): void {
    if (!this.novoConvidado.nomeConvidado) {
      console.error('O nome do convidado é obrigatório!');
      return;
    }

    const convidadoData = {
      ...this.novoConvidado,
      evento: { idEvento: this.evento?.idEvento } // Incluindo o idEvento no corpo da requisição
    };

    this.convidadosService.cadastrarConvidado(convidadoData).subscribe(
      response => {
        console.log('Convidado cadastrado com sucesso', response);
        this.fecharFormularioConvidado();
        if (this.evento?.idEvento) {
          this.carregarConvidados(this.evento.idEvento);
        }
      },
      error => {
        console.error('Erro ao cadastrar o convidado', error);
      }
    );
  }

  excluirTarefa(idTarefa: number): void {
    
     
    this.tarefaService.excluirTarefa(idTarefa).subscribe({
      next: () => {
        console.log('Tarefa excluída com sucesso');

        // Atualiza a lista local
        this.tarefas = this.tarefas.filter(tarefa => tarefa.idTarefa !== idTarefa);
      },
      error: error => {
        console.error('Erro ao excluir a tarefa', error);
      }
    });
  
  }

}
