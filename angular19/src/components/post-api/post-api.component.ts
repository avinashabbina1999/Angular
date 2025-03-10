import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-post-api',
  imports: [],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent {
  carList: any[] = []
  http = inject(HttpClient)

  getAllCars(){
    this.http.get("https://freeapi.miniprojectideas.com/api/CarRental/App/GetCars").subscribe((res:any)=>{
      this.carList = res.data
    })
  }
}
