import {MatButtonModule, MatCheckboxModule, MatBadgeModule} from '@angular/material';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({

  imports: [MatButtonModule, MatCheckboxModule, MatBadgeModule, MatToolbarModule, MatIconModule, MatMenuModule, MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatBadgeModule, MatToolbarModule, MatIconModule, MatMenuModule, MatTabsModule]
})
export class MaterialModule { }
