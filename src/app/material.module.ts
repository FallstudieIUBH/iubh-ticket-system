import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ]
})
export class MaterialModule {}
