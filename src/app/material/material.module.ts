import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule, MatInputModule } from '@angular/material';

const matModules = [
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatBadgeModule,
  MatTableModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  declarations: [],
  imports: [ matModules ],
  exports: [ matModules ]
})
export class MaterialModule { }
