import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

// Angular Maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],

  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9MC5YRuZpISFdyOFK0BE34c5oFTmrMcY'
    })
  ],

  providers: [
    
  ],

  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }