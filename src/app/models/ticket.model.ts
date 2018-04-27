export interface Ticket {
    ticketId?: string;
    uid?: string;
    kategorie?: string; /* 'Prüfungsamt' | 'Administration' | 'IT-Support' | 'Sonstiges' | null; */
    text?: string;
    status?: 'offen' | 'beantwortet' | null;
    datum?: any;
    antwort?: string;
}