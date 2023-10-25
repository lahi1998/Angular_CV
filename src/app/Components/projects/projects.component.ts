import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor() { }

  slides: string [] = ['./assets/projects/UdlaansideZbc/Login.jpg', './assets/projects/UdlaansideZbc/Forside.jpg', 
  './assets/projects/UdlaansideZbc/Udlaan.jpg', './assets/projects/UdlaansideZbc/SletPordukt.jpg','./assets/projects/UdlaansideZbc/OpretPordukt.jpg',
  './assets/projects/UdlaansideZbc/AdminTables.jpg', './assets/projects/UdlaansideZbc/AdminBrugerUpdate.jpg', './assets/projects/UdlaansideZbc/AdminBrugere.jpg', ]
  i=0;

  getSlide() {
      return this.slides[this.i];
  }

  getPrev() {
      this.i = this.i===0 ? 0 : this.i - 1;
  }
//edit here    
  getNext() {
    
    if(this.i == 7)
    { 
      this.i = 0;
      console.log(this.i)
    }
    else{
      this.i = this.i===this.slides.length ? this.i : this.i + 1;
      console.log(this.i)
    }
    
  }
}
