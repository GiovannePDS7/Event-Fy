import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvidadosService {
  // private apiUrl = 'http://localhost:8085/api/convidados'; 
  private apiUrl = 'http://cadastro_listaconvidados.railway.internal/api/convidados'; 
  constructor(private http: HttpClient) { }

  // Método para listar convidados de um evento específico
  listarConvidadosPorEvento(idEvento: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/evento/${idEvento}`);
  }

  // Método para cadastrar um novo convidado
  cadastrarConvidado(convidadoData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cadastrar`, convidadoData);
  }
}
