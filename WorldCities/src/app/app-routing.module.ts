import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitiesComponent } from './cities/cities.component';
import { CountriesComponent } from './countries/countries.component';
import { CityEditComponent } from './cities/city-edit.component';
import { CountryEditComponent } from './countries/country-edit.component';
import { LoginComponent } from './auth/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'city', component: CityEditComponent },
  { path: 'city/:id', component: CityEditComponent },
  { path: 'country/:id', component: CountryEditComponent },
  { path: 'country', component: CountryEditComponent },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
