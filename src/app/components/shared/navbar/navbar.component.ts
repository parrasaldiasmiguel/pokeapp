import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit() {
  }

  buscarPokemon(filtro:String){
    console.log(filtro);
 this.router.navigate(['/buscador',filtro]);
  }

 
  }


