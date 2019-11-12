import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// MODULOS MIOS
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// NGRX
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// Modulos Personalizados
import { AuthModule } from './auth/auth.module';
// Environment
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
