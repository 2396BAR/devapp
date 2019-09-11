import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DevappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DevappSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DevappSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DevappSharedModule {
  static forRoot() {
    return {
      ngModule: DevappSharedModule
    };
  }
}
