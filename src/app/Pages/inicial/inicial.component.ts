import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Acessar os dados do localStorage
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const nome = localStorage.getItem('nome');
    const emailOrganizador = localStorage.getItem('emailOrganizador');
    const contato = localStorage.getItem('contato');
    const foto = localStorage.getItem('foto');

    // Exibir os dados no console
    console.log('Dados do usuário no localStorage:');
    console.log('Token:', token);
    console.log('ID:', id);
    console.log('Nome:', nome);
    console.log('Email:', emailOrganizador);
    console.log('Contato:', contato);
    console.log('Foto:', foto);
  }
}
