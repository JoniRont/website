import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ],
  declarations:[],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule
  ],
})
export class MaterialModule { }
