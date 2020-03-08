import { Component } from '@angular/core';

@Component({
  selector: 'add-contact',
  template: `
  <button (click)="toggleContactForm()" type="button">Add New Contact</button>
  <div *ngIf="showForm">
    <h2>New Contact</h2>
    <form>
      <label for="name" required>Name</label>
      <input id="name" type="text">
      <label for="phone">Phone</label>
      <input id="phone" type="number">
      <label for="email">Email</label>
      <input id="email" type="email">
      <fieldset>
        <legend>Address</legend>
        <label for="street">Street</label>
        <input id="street" type="text">
        <label for="city">City</label>
        <input id="city" type="text">
        <label for="state">State</label>
        <input id="state" type="text">
        <label for="postal">Postal Code</label>
        <input id="postal" type="text">
      </fieldset>
      <button (click)="addContact()" type="submit">Save Contact</button>
    </form>
  </div>
  `,
})

export class AddContactComponent  {
  showForm: boolean;

  constructor(){
    this.showForm = false;
  }

  toggleContactForm() {
    this.showForm = !this.showForm;
  }

  addContact() {
    
  }
}
