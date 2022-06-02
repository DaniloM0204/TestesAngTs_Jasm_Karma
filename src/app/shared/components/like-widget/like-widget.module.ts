import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';

@NgModule({
  declarations: [
    LikeWidgetModule
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [],
  providers: [UniqueIdService]
})

export class LikeWidgetModule {}
