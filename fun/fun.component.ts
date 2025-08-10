import { Component } from '@angular/core';

@Component({
  selector: 'app-fun',
  standalone: false,
  templateUrl: './fun.component.html',
  styleUrl: './fun.component.css'
})
export class FunComponent {
  modalVisible: boolean =false;
  openModal() {
    this.modalVisible = true; 
    
  }
  closeModal(){
    this.modalVisible=false;
  }
  openModal1() {
    this.modalVisible = true; 
  }
  openModal2() {
    this.modalVisible = true; 
  }
  closeModal2(){
    this.modalVisible=false;
  }
  closeModal3(){
    this.modalVisible=false;
  }

}
