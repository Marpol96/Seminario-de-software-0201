import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY } from 'rxjs';
import  Swal  from 'sweetalert2';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  registrado(): void {
    event.preventDefault()
    var nombre = (<HTMLInputElement>document.getElementById("nombrec")).value
    var apellido = (<HTMLInputElement>document.getElementById("apellidoc")).value
    var email = (<HTMLInputElement>document.getElementById("email")).value
    var fecha = (<HTMLInputElement>document.getElementById("fechac")).value
    var sexo = (<HTMLInputElement>document.getElementById("sexoc")).value
    var contra1 = (<HTMLInputElement>document.getElementById("password1")).value
    var contra2 = (<HTMLInputElement>document.getElementById("password2")).value

    if(nombre == ""){
      document.getElementById("nombrec").focus();
      Swal.fire('Debes ingresar tu nombre','','error')

    }else if(apellido == ""){
      document.getElementById("apellidoc").focus();
      Swal.fire('Debes ingresar tu Apellido','','error')

    }else if(email == ""){
      document.getElementById("email").focus();
      Swal.fire('Debes ingresar el correo','','error')

    }else if(fecha == ""){
      document.getElementById("fechac").focus();
      Swal.fire('Debes ingresar tu año de nacimiento','','error')

    }else if(sexo == ""){
      document.getElementById("sexoc").focus();
      Swal.fire('Debes ingresar tu sexo(genero)','','error')

    }else if(contra1 == ""){
      document.getElementById("password").focus();
      Swal.fire('Debes ingresar la contraseña','','error')
      
    }else if(contra2 == ""){
      document.getElementById("password").focus();
      Swal.fire('Debes ingresar la segunda contraseña','','error')

    }else{
      if(contra1==contra2){
        this.router.navigate(['/Inicio'])
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Registrado & Logeado!',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire('Datos Incorrectos!','Las contraseñas no coinciden','error')
      }
    }
  }
}
