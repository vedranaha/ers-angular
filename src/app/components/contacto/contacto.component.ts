import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  usuario = {
    nombre: ' ',
    apellido: '',
    correo: '',
  }

  constructor() { }


  ngOnInit(): void {
  }

  guardar( forma: NgForm ){
    console.log( forma );

    if ( forma.invalid ) {

      Object.values( forma.controls ).forEach( control => {
        control.markAsTouched();
      });
    
      return;
    }
    console.log( forma.value );
  }

}