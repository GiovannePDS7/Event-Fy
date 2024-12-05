import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Evento } from '../models/evento'; // Importar a interface criada

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  // apiUrl = 'http://localhost:8083/eventos'; // URL do backend
  apiUrl = 'https://eventoexistenteeventfy-production.up.railway.app/eventos'; // URL do backend

  constructor(private http: HttpClient) {}

  getEventosPorOrganizador(idOrganizador: number): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.apiUrl}/organizadorEvents?idOrganizador=${idOrganizador}`).pipe(
      tap(response => console.log('Eventos recebidos: ', response)) // Log da resposta
    );
  }

}
