import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { IngresoEgreso } from '../ingreso-egreso.model';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { AppState } from '../ingreso-egreso.reducer';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styles: []
})
export class EstadisticaComponent implements OnInit, OnDestroy {

  ingresos: number;
  egresos: number;

  cuantosIngresos: number;
  cuantosEgresos: number;

  subscription: Subscription = new Subscription();


  // Doughnut
  public doughnutChartLabels: Label = ['Ingresos', 'Egresos'];
  public doughnutChartData: MultiDataSet = [];

  public doughnutChartType: ChartType = 'doughnut';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscription = this.store.select('ingresoEgreso').subscribe(ingresoEgreso => {
      this.contarIngresoEgresos(ingresoEgreso.items);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  contarIngresoEgresos(items: IngresoEgreso[]) {
    this.ingresos = 0;
    this.egresos = 0;

    this.cuantosEgresos = 0;
    this.cuantosIngresos = 0;

    items.forEach(item => {
      if (item.tipo === 'ingreso') {
        this.cuantosIngresos++;
        this.ingresos += item.monto;
      } else {
        this.cuantosEgresos++;
        this.egresos += item.monto;
      }
    });

    this.doughnutChartData = [[this.ingresos, this.egresos]];

  }

}
