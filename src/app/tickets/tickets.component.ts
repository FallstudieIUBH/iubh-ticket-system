import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Ticket } from './../models/ticket.model';
import { TicketService } from './../services/ticket.service';
import {Observable} from "rxjs/Observable";


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

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
   this.tickets$ = this.ticketService.getTickets();
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
