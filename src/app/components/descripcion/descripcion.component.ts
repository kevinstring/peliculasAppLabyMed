import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaServiceService } from 'src/app/pelicula-service.service';
import { Peliculas } from 'src/app/peliculas';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  pelicula:Peliculas;
  id:string;

  constructor(private servicio:PeliculaServiceService,private router:ActivatedRoute) { 
  this.router.paramMap.subscribe(a=> this.id=a.get("id"));
    this.pelicula=servicio.getPelis()[this.id];

  }

  ngOnInit(): void {
    console.log();

  
  }

}
