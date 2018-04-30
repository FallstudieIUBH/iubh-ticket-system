import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Ticket } from './../models/ticket.model';
import { TicketService } from './../services/ticket.service';
import {Observable} from "rxjs/Observable";
import { AuthService } from '../auth/auth.service';
import { User } from './../models/user.model';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets$: Observable<any>;
  answerState: boolean = false;
  ticketToAnswer: Ticket;
  selectedCategory: String;

  kategories = [
    {value: '-'},
    {value: 'Prüfungsamt'},
    {value: 'Administration'},
    {value: 'IT-Support'},
    {value: 'Sonstiges'}
  ];

  user: User;

  constructor(private ticketService: TicketService, private auth: AuthService) { }

  ngOnInit() {
   this.tickets$ = this.ticketService.getTickets();

   this.auth.user.subscribe(user => this.user = user)
  }

  deleteTicket(event, ticket: Ticket){
    this.ticketService.deleteTicket(ticket);
  }

  answerTicket(event, ticket: Ticket){
    this.answerState = true;
    this.ticketToAnswer = ticket;
  }

  updateTicket(ticket: Ticket){
    this.answerState = false;
    ticket.status = 'beantwortet';
    this.ticketService.updateTicket(ticket);
  }

}
