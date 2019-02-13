import { Component } from '@angular/core';
import { MapaEditarComponent } from './mapa-editar.component';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent {

  marcadores:Marcador[] = [];

  lat:number = 4.569072339774754;
  lng:number = -74.0952730178833;

  constructor( public snackBar:MatSnackBar, public dialog:MatDialog ) {

    if ( localStorage.getItem('marcadores') ) {
      this.marcadores = JSON.parse( localStorage.getItem('marcadores') );
    }

  }

  agregarMarcador( evento ) {

    const coords:{
      lat:number,
      lng:number
    } = evento.coords;
    console.log(evento);
    const nuevoMarcador = new Marcador( coords.lat, coords.lng );
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador Agregado', 'Cerrar', { duration: 3000 } );
    
  }

  guardarStorage() {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores) );
  }

  borrarMarcador( idx:number ) {
    // console.log(idx);
    this.marcadores.splice(idx, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador Eliminado', 'Cerrar', { duration: 3000 } );
  }

  editarMarcador( marcador:Marcador ) {

    const dialogRef = this.dialog.open( MapaEditarComponent, {
      width: '250px',
      data: {
        titulo: marcador.titulo,
        descripcion: marcador.desc
      }
    });

    dialogRef.afterClosed()
    .subscribe(result => {
      // console.log('The dialog was closed');

      if ( !result ) {
        return;
      }

      marcador.titulo = result.titulo;
      marcador.desc = result.descripcion;
      this.guardarStorage();
      this.snackBar.open('Marcador Actualizado', 'Cerrar', { duration: 3000 } );
    });

  }

}