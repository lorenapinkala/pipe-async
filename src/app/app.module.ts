import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContentComponent } from './components/content/content.component';
import { MaterialModule } from './material.module';
import { EditarAlumnoDialogComponent } from './components/editar-alumno-dialog/editar-alumno-dialog.component';
import { DirectivaPersonalizadaDirective } from './directive/directiva-personalizada.directive';
import { NombrePipe } from './pipes/nombre.pipe';
import { Content2Component } from './components/content2/content2.component';
import { Content3Component } from './components/content3/content3.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    EditarAlumnoDialogComponent,
    DirectivaPersonalizadaDirective,
    NombrePipe,
    Content2Component,
    Content3Component,
    EditarAlumnoDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
