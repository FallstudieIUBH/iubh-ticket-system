import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Ticket } from '../models/ticket.model';
import { UIService } from './ui.Service';



@Injectable()
export class TicketService {
    ticketCollection: AngularFirestoreCollection<Ticket>;
    tickets: Observable<Ticket[]>;
    ticketDoc: AngularFirestoreDocument<Ticket>;

    constructor(public afs: AngularFirestore, private uiService: UIService) {
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
        this.uiService.showSnackbar('Ticket erfolgreich gesendet', null, 3000, 'success');
    }

    updateTicket(ticket: Ticket) {
        this.ticketDoc = this.afs.doc(`tickets/${ticket.ticketId}`);
        this.ticketDoc.update(ticket);
        this.uiService.showSnackbar('Antwort erfolgreich gesendet', null, 3000, 'success');
    }

    deleteTicket(ticket: Ticket) {
        this.ticketDoc = this.afs.doc(`tickets/${ticket.ticketId}`);
        this.ticketDoc.delete();
        this.uiService.showSnackbar('Ticket erfolgreich gelöscht', null, 3000, 'success');
    }
}
