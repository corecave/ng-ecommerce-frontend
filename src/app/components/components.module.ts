import { NgModule } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { HeaderComponent } from './header/header.component';
import { UiSettingsComponent } from './ui-settings/ui-settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataTablesModule } from 'angular-datatables';
import { CommonModule } from '@angular/common';

const COMPONENTS = [
  ProductComponent,
  HeaderComponent,
  UiSettingsComponent,
  SidebarComponent,
  FooterComponent,
  PageTitleComponent,
  DatatableComponent,
];

@NgModule({
  declarations: COMPONENTS,
  imports: [DataTablesModule, CommonModule],
  exports: [...COMPONENTS, DataTablesModule],
})
export class ComponentsModule {}
