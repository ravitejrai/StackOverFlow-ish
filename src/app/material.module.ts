import { NgModule } from  '@angular/core';
 
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,
    MatButtonModule,MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule,MatInputModule,MatRadioModule,MatListModule} from '@angular/material';
    import {MatTooltipModule} from '@angular/material/tooltip';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 
 
@NgModule({
imports: [MatButtonModule,MatToolbarModule,
    MatNativeDateModule,MatDatepickerModule,
    MatIconModule,MatButtonModule,MatCheckboxModule, 
    MatToolbarModule, MatCardModule,MatFormFieldModule,
    MatInputModule,MatRadioModule,MatListModule,FormsModule, 
    ReactiveFormsModule,MatTooltipModule],
exports: [MatNativeDateModule,FormsModule,
    MatDatepickerModule,MatIconModule,MatButtonModule,
    MatCheckboxModule, MatToolbarModule, MatCardModule,
    MatFormFieldModule,MatInputModule,MatListModule,MatRadioModule]
 
})
 
export  class  MyMaterialModule { }