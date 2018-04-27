import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { TicketService } from './../services/ticket.service';
import { Ticket } from './../models/ticket.model';
import { AuthService } from '../auth/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-ticket-formular',
  templateUrl: './ticket-formular.component.html',
  styleUrls: ['./ticket-formular.component.css']
})
export class TicketFormularComponent implements OnInit {

  ticket: Ticket = {
    uid: '',
    kategorie: '',
    text: '',
    status: 'offen',
    datum: new Date()
  };

  kategories = [
    {value: 'Prüfungsamt'},
    {value: 'Administration'},
    {value: 'IT-Support'},
    {value: 'Sonstiges'}
  ];

  constructor(private ticketService: TicketService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.ticket.uid = firebase.auth().currentUser.uid;
    this.ticketService.addTicket(this.ticket);
/*  this.ticket.kategorie = '';
    this.ticket.text = ''; */
    this.router.navigate(['/tickets']);
  }
}
