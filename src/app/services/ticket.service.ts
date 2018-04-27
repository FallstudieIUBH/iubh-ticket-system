import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Ticket } from '../models/ticket.model';



@Injectable()
export class TicketService {
    ticketCollection: AngularFirestoreCollection<Ticket>;
    tickets: Observable<Ticket[]>;
    ticketDoc: AngularFirestoreDocument<Ticket>;

    constructor(public afs: AngularFirestore) {
        this.ticketCollection = this.afs.collection('tickets', ref => ref.orderBy('datum', 'asc'));
    }

    getTickets(): Observable<any> {
      return this.tickets = this.ticketCollection.snapshotChanges().map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Ticket;
          data.ticketId = a.payload.doc.id;
          return data;
        });
      });
    }

    addTicket(ticket: Ticket) {
        this.ticketCollection.add(ticket);
    }

    updateTicket(ticket: Ticket) {
        this.ticketDoc = this.afs.doc(`tickets/${ticket.ticketId}`);
        this.ticketDoc.update(ticket);
    }

    deleteTicket(ticket: Ticket) {
        this.ticketDoc = this.afs.doc(`tickets/${ticket.ticketId}`);
        this.ticketDoc.delete();
    }
}
