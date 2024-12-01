import { Component, OnInit } from '@angular/core';
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

  constructor(private eventoService: EventoService) {}

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
          this.eventos = data.map(evento => ({
            ...evento,
            horarioInicio: this.formatarHora(evento.horarioInicio),
            horarioFim: this.formatarHora(evento.horarioFim),
          }));
        },
        error: (err) => console.error('Erro ao buscar eventos:', err)
      });
  }

  // Formata o horário para "HH:mm"
  formatarHora(horario: string): string {
    const [horas, minutos] = horario.split(':'); // Divide a string "HH:mm:ss"
    return `${horas}:${minutos}`;
  }
}
