import { Component } from '@angular/core';

@Component({
  selector: 'contact-list',
  template: `
    <h2>Contacts</h2>
    <table>
      <thead>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
        <td>Address</td>
        <td>Delete</td>
      </thead>
      <tbody>
        <tr *ngFor="let contact of contacts; let i = index">
          <td>{{name}}</td>
          <td>{{email}}</td>
          <td>{{phone}}</td>
          <td>{{address.street}} {{address.city}} {{address.state}} {{address.postalCode}}</td>
          <td>
            <button (click)="deleteContact(i)">X</button>
          </td>
        </tr>
      </tbody>
    </table>
  `,
})

export class ContactsComponent  {
  name: string;
  email: string;
  phone: number;
  address: address;

  deleteContact(i) {
    this.contacts.splice(i, 1);
  }
}

interface address {
  street: string;
  city: string;
  state: string;
  postalCode: number;
}
