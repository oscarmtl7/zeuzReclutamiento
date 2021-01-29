import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';

/*Components*/
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpleadosComponent } from './empleados/empleados.component';
import {FormComponent} from './empleados/form.component';
import { ReactiveFormsModule } from '@angular/forms';

import {EmpleadoService } from './empleados/empleado.service';

import {DragDropModule} from '@angular/cdk/drag-drop';

/*npm*/
import { CarouselModule } from 'ngx-owl-carousel-o';
import {NgxPaginationModule} from 'ngx-pagination';
import { GruposComponent } from './grupos/grupos.component';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { FilterCheckPipe } from './shared/pipes/filter-check.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    HomeComponent,
    EmpleadosComponent,
    GruposComponent,
    FormComponent,
    FilterPipe,
    FilterCheckPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    MatExpansionModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
