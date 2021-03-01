import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { UiSettingsComponent } from './ui-settings/ui-settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PageTitleComponent } from './page-title/page-title.component';

const COMPONENTS = [
  ProductComponent,
  HeaderComponent,
  UiSettingsComponent,
  SidebarComponent,
  FooterComponent,
  PageTitleComponent,
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
