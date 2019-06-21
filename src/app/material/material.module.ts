import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';

const matModules = [
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: [ matModules ],
  exports: [ matModules ]
})
export class MaterialModule { }
