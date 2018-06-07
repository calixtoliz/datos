import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';


var firebaseConfig = {
  apiKey: "AIzaSyC5Rv89MRfDL5QY3C5y87pfLBxMbkwHoRQ",
  authDomain: "gatos-4c3ca.firebaseapp.com",
  databaseURL: "https://gatos-4c3ca.firebaseio.com",
  projectId: "gatos-4c3ca",
  storageBucket: "",
  messagingSenderId: "962864865738"
};




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  
    AngularFirestoreModule     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
