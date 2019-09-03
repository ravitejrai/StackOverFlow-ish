import { NgModule } from  '@angular/core';
 
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,
    MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule} from  '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 
 
@NgModule({
imports: [MatButtonModule,MatToolbarModule,
    MatNativeDateModule,MatDatepickerModule,
    MatIconModule,MatButtonModule,MatCheckboxModule, 
    MatToolbarModule, MatCardModule,MatFormFieldModule,
    MatInputModule,MatRadioModule,MatListModule,FormsModule, 
    ReactiveFormsModule],
exports: [MatNativeDateModule,FormsModule,
    MatDatepickerModule,MatIconModule,MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule,]
 
})
 
export  class  MyMaterialModule { }