import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// PETICION GET AL SERVICIO
import {HttpClientModule} from '@angular/common/http';

//COMPONENTES
import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiceComponent } from './components/indice/indice.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { MundoPokemonComponent } from './components/mundo-pokemon/mundo-pokemon.component';

import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CargaComponent } from './components/shared/carga/carga.component';

//SERVICIO
import {PokemonService} from './servicio/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    IndiceComponent,
    BuscadorComponent,
    MundoPokemonComponent,
    PokemonComponent,
    NavbarComponent,
    CargaComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTES
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
