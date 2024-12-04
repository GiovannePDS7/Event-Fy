import { Component } from '@angular/core';

@Component({
  selector: 'app-ev-infos',
  templateUrl: './ev-infos.component.html',
  styleUrls: ['./ev-infos.component.css']
})
export class EvInfosComponent {


  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }


}
