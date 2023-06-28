import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Peliculas } from './peliculas';

@Injectable({
  providedIn: 'root'
})
export class PeliculaServiceService {

private url: string = "https://www.omdbapi.com/?apikey=8e8d202&t="
private id:string= ""
public formu:Peliculas[]=[];


guardarPelis(peliculas:Peliculas){
  this.formu.push(peliculas)
}

getPelis(){
  return this.formu;
}

constructor(private http:HttpClient) { 


  }

  getPeliculas(nombre:string,year:string){
    // https://www.omdbapi.com/?apikey=8e8d202&t=pirates
        return this.http.get<Peliculas>(`${this.url}${nombre}&y=${year}`)
        
        // .pipe(map(a=>{
        //   let interfacePelis:Peliculas[]=[];
        //   for(let i in a ){
        //     // interfacePelis.push(i)
          
        //     // console.log({a[i],i})
        //   }
        //   return interfacePelis
        // }
        
        // ))
  }
  
}
