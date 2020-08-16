import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeService } from './home.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '**',
    component: HomeComponent, 
  }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  providers: [
    HomeService
  ], 
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,

    ReactiveFormsModule,
    MatToolbarModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    
    MatCardModule
  ],
  exports: [  ],
})
export class HomeModule { }
