import { Routes, RouterModule } from '@angular/router';

import { IndiceComponent } from './components/indice/indice.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { MundoPokemonComponent } from './components/mundo-pokemon/mundo-pokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
    {path:'indice', component:IndiceComponent},
    {path:'mundopokemon',component:MundoPokemonComponent},
    {path:'pokemon/:id',component:PokemonComponent},
    {path:'buscador/:filtro',component:BuscadorComponent},
    {path:'**' ,pathMatch:'full', redirectTo:'indice'}
];

export const APP_ROUTES=RouterModule.forRoot(routes,{useHash:true})

