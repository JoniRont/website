import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule

  ],
  declarations:[],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule

  ],
})
export class MaterialModule { }
