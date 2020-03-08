import { Component } from '@angular/core';

@Component({
  selector: 'contact-list',
  template: `
    <h2>Contacts</h2>
    <ul>
      <li>Test</li>
    </ul>
  `,
})
export class ContactsComponent  {
  name: string;
  email: string;
  phone: number;
  address: address;
}

interface address {
  street: string;
  city: string;
  state: string;
  postalCode: number;
}
