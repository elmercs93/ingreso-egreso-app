import { Component, OnInit } from "@angular/core";
import { AuthService } from '../auth.service';

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styles: []
})
export class RegistroComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSubmit(form) {
    this.authService.crearUsuario(form.nombre, form.email, form.password);
  }
}
