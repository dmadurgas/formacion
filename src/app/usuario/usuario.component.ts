import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  public nombre: string;

  /**
   * public Nombre: string,
    public Apellido: string,
    public Email: string,
    public HorasPendientes: number,
    public HorasUtilizadas: number,
    public Fechas: Array<string>
   */

  constructor(private _route: ActivatedRoute, private _router: Router) {

   }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.nombre = params['nombre'];
      console.log(params);
    });
  }

  redirigir() {
    this._router.navigate(['/usuario', 'JAR JAR BINGS']);
  }

}
