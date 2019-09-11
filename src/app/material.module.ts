import { NgModule } from  '@angular/core';
 
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,
    MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
imports: [MatButtonModule,MatToolbarModule,
    MatNativeDateModule,MatDatepickerModule,
    MatIconModule,MatButtonModule,MatCheckboxModule, 
    MatToolbarModule, MatCardModule,MatFormFieldModule,
    MatInputModule,MatRadioModule,MatListModule,FormsModule, 
    ReactiveFormsModule,MatGridListModule,FlexLayoutModule],
    
exports: [MatNativeDateModule,FormsModule,
    MatDatepickerModule,MatIconModule,MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule]
 
})
 
export  class  MyMaterialModule { }