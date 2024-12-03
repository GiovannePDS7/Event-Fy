import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from 'src/app/services/evento-service.service';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: Evento[] = []; // Array para armazenar os eventos
  idOrganizador!: number; // ID será dinâmico

  constructor(private eventoService: EventoService, private router: Router) {}

  ngOnInit(): void {
    const idFromLocalStorage = localStorage.getItem('organizadorId');
    if (idFromLocalStorage) {
      this.idOrganizador = +idFromLocalStorage;
    } else {
      console.error('ID do organizador não encontrado no LocalStorage');
      return;
    }

    this.eventoService.getEventosPorOrganizador(this.idOrganizador)
    .subscribe({
      next: (data) => {
        this.eventos = data.map(evento => {
          console.log(evento); // Verifique o evento aqui
          return {
            ...evento,
            horarioInicio: this.formatarHora(evento.horarioInicio),
            horarioFim: this.formatarHora(evento.horarioFim),
          };
        });
      },
      error: (err) => console.error('Erro ao buscar eventos:', err)
    });
  }

  // Formata o horário para "HH:mm"
  formatarHora(horario: string): string {
    const [horas, minutos] = horario.split(':'); // Divide a string "HH:mm:ss"
    return `${horas}:${minutos}`;
  }

  // Método para navegar até a tela de detalhes do evento
  verDetalhes(evento: Evento) {
    if (evento && evento.idEvento) {
      console.log(evento.idEvento);  // Verifique se o ID está correto
      // Passando o evento completo no estado
      this.router.navigate(['/infoEvento', evento.idEvento], {
        state: { evento: evento }
      });
    } else {
      console.error('ID do evento está indefinido');
    }
  }



}
