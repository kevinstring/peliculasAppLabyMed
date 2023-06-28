import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { RouterLink } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DescripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
