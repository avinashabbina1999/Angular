import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  imports: [NgIf,FormsModule],
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  div1Visible: boolean = true
  number1: string = ''
  number2: string = ''

  hide(){
    this.div1Visible = false
  }
  show(){
    this.div1Visible = true
  }
}
