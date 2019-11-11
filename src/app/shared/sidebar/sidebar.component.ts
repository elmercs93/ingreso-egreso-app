import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../auth/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IngresoEgresoService } from '../../ingreso-egreso/ingreso-egreso.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit, OnDestroy {

  nombre: string;
  subcription: Subscription = new Subscription();
  constructor(private authService: AuthService, private store: Store<AppState>, public ingresoEgresoService: IngresoEgresoService) { }

  ngOnInit() {
    this.subcription = this.store.select('auth').pipe(filter(auth => auth.user != null)).subscribe(auth => this.nombre = auth.user.nombre);
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }


  logOut() {
    this.ingresoEgresoService.cancelarSubscriptions();
    this.authService.logOut();
  }

}
