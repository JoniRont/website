import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule
  ],
  declarations:[],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule
  ],
})
export class MaterialModule { }
