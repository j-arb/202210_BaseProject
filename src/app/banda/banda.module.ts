
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BandaDetailComponent } from './banda-detail/banda-detail.component';
import { BandaListComponent } from './banda-list/banda-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BandaListComponent],
  declarations: [BandaListComponent, BandaDetailComponent]
})
export class BandaModule { }
