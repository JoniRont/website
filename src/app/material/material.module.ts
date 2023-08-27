import { NgModule } from '@angular/core';
// import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatChipsModule, MatOptionModule, MatGridListModule, MatProgressBarModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatDialogModule, MatSnackBarModule, MatSelectModule, MatInputModule, MatSidenavModule, MatCardModule, MatIconModule, MatRadioModule, MatProgressSpinnerModule, MatTabsModule, MatListModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar'
import { AppModule } from '../app.module';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule
  ],
  declarations:[],
  exports: [
    MatToolbarModule,
    MatButtonModule
  ],
})
export class MaterialModule { }
