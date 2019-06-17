import { NgModule } from '@angular/core';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const matModules = [
  MatGridListModule,
  MatCardModule,
  MatButtonModule
];

@NgModule({
  declarations: [],
  imports: [ matModules ],
  exports: [ matModules ]
})
export class MaterialModule { }
