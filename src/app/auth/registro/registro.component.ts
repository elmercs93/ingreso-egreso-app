import { Component, OnInit, OnDestroy } from "@angular/core";
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styles: []
})
export class RegistroComponent implements OnInit, OnDestroy {

  cargando: boolean;
  subscription: Subscription;

  constructor(private authService: AuthService,
    public store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('ui').subscribe(ui => this.cargando = ui.isLoading);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form) {
    this.authService.crearUsuario(form.nombre, form.email, form.password);
  }
}
