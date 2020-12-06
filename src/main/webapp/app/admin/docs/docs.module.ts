import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProntuarioUnicoSharedModule } from 'app/shared/shared.module';

import { DocsComponent } from './docs.component';

import { docsRoute } from './docs.route';

@NgModule({
  imports: [ProntuarioUnicoSharedModule, RouterModule.forChild([docsRoute])],
  declarations: [DocsComponent],
})
export class DocsModule {}
