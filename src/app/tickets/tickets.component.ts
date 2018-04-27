import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Ticket } from './../models/ticket.model';
import { TicketService } from './../services/ticket.service';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets: Ticket[];
  answerState: boolean = false;
  ticketToAnswer: Ticket;

  constructor(private ticketService: TicketService) { }

  ngOnInit() {
    this.ticketService.getTickets().subscribe(tickets => {
      this.tickets = tickets;
    });
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
