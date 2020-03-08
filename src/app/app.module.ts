import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContactsComponent } from './components/contacts.component';
import { AddContactComponent } from './components/addContact.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ContactsComponent, AddContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
