import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PeliculaServiceService } from 'src/app/pelicula-service.service';
import { Peliculas } from 'src/app/peliculas';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  formulario:any;
  id:number=0;
  peliculaEncontrada=false;
 @Output() peticionForm:Peliculas[]=[];

  constructor(private servicio:PeliculaServiceService) { }

  ngOnInit(): void {
    this.peticionForm=this.servicio.getPelis()
    this.formulario= new FormGroup ({
        nombre: new FormControl(''),
        year:  new FormControl('')
    })

    
  } 

  buscar(){
   let pelicula:string = this.formulario.value.nombre;
   let year:string = this.formulario.value.year

    if(pelicula!="" && year!=""){
      this.servicio.getPeliculas(pelicula,year).subscribe((a)=>{
            if(a.Response=="False"){
              console.log("No encontrada")
              alert("Pelicula no encontrada")
            }else
          this.servicio.guardarPelis(a);
          this.peticionForm=this.servicio.getPelis()
        

        // this.peticionForm=this.servicio.getPeliculas(a);
        console.log(this.servicio.getPelis())
  
      })
    }

   
    console.log(this.formulario.value)


  }

}
