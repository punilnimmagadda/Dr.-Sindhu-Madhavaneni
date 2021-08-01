import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

// Angular Firebase Modules
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

// Directives
import { ScrollToDirective } from './directives/scroll-to.directive';

// Components
import { AppComponent } from './app.component';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';
import { BookingComponent } from './components/booking/booking.component';

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
    PromoBannerComponent,
    BookingComponent,
    ScrollToDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatButtonModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
