import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { MatIconModule } from '@angular/material/icon';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';

export const firebaseConfig = {
  apiKey: "AIzaSyDuAKK9adChsZAeIWFkZZPCmJ-akSfjejs",
  authDomain: "dr-sindhu-madhavaneni.firebaseapp.com",
  databaseURL: "https://dr-sindhu-madhavaneni-default-rtdb.firebaseio.com",
  projectId: "dr-sindhu-madhavaneni",
  storageBucket: "dr-sindhu-madhavaneni.appspot.com",
  messagingSenderId: "152465701389",
  appId: "1:152465701389:web:a42d26ea71d2cab6db3344",
  measurementId: "G-97MNE5S4QQ"
};

@NgModule({
  declarations: [
    AppComponent,
    PromoBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
