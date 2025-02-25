import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  firstName: string = 'Avinash'
  rollNo: number = 1236;
  isActive: boolean = false
  currentDate: Date = new Date();

  constructor(private router: Router){
    this.isActive = false;
  }

  showWelcome(){
    alert('welcome User')
  }

  navigateToAdmin() {
    this.router.navigateByUrl('/admin'); 
  }
}
