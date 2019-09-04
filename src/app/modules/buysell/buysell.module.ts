import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuysellRoutingModule } from './buysell-routing.module';
import { SearchstockComponent } from './container/searchstock/searchstock.component';

import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [SearchstockComponent],
  imports: [
    CommonModule,
    BuysellRoutingModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
    FlexLayoutModule,
    MatGridListModule,
    MatFormFieldModule,
  ]
})
export class BuysellModule { }
