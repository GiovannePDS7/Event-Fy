import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  // private apiUrl = 'http://localhost:8084/api/tarefas/cadastrar';

  constructor(private http: HttpClient) {}

  cadastrarTarefa(tarefaData: any): Observable<any> {
    // Simplesmente envia a requisição sem o token
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'  // Apenas o cabeçalho Content-Type
    });

    return this.http.post(this.apiUrl, tarefaData, { headers });
  }
}
