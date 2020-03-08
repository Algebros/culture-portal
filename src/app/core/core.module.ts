import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './pages/error/error.component';
import { MobileMenuComponent } from './components/header/mobile-menu/mobile-menu.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    MobileMenuComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatButtonToggleModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
