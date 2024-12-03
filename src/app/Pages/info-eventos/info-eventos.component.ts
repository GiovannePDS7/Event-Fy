import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/models/evento';

@Component({
  selector: 'app-info-eventos',
  templateUrl: './info-eventos.component.html',
  styleUrls: ['./info-eventos.component.css']
})
export class InfoEventosComponent implements OnInit {
  evento: Evento | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const navigation = history.state;  // Acessando o estado da navegação
    if (navigation && navigation.evento) {
      this.evento = navigation.evento;  // Se o evento foi passado, atribui à variável
      console.log('Evento recebido:', this.evento);
    } else {
      console.error('Nenhum evento encontrado no estado de navegação');
    }
  }
}
