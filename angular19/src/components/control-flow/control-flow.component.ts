import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  isDiv1Visible: boolean = false
  isChecked: boolean = false
  cityList: string[] = ['Hyderabad','Banglore','Chennai']

  hideShowDiv1(isShow: boolean){
    this.isDiv1Visible = isShow
  }
}
