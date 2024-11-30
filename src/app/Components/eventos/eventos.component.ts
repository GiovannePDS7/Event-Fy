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
    // Pega o ID do organizador do localStorage
    const idFromLocalStorage = localStorage.getItem('organizadorId');
    if (idFromLocalStorage) {
      this.idOrganizador = +idFromLocalStorage; // Converte para número
    } else {
      console.error('ID do organizador não encontrado no localStorage');
      return;
    }

    // Chama o serviço para buscar os eventos
    this.eventoService.getEventosPorOrganizador(this.idOrganizador)
    .subscribe({
      next: (data) => {
        console.log('Eventos recebidos:', data);  // Log para verificar os dados recebidos
        this.eventos = data;
      },
      error: (err) => console.error('Erro ao buscar eventos:', err)
    });

    console.log('ID Organizador:', this.idOrganizador);

  }  
}
