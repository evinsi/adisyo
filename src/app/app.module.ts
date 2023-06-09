import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HesapComponent } from './hesap/hesap.component';
import { MenuComponent } from './menu/menu.component';
import { KategoriComponent } from './kategori/kategori.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { TurkishToEnglishPipe } from './turkish-to-english.pipe';
import { BoslukSilPipe } from './bosluk-sil.pipe';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HomeComponent } from './home/home.component';
import { SiparisEkranComponent } from './siparis-ekran/siparis-ekran.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HesapComponent,
    MenuComponent,
    KategoriComponent,
    TurkishToEnglishPipe,
    BoslukSilPipe,
    HomeComponent,
    SiparisEkranComponent,
    NavLeftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    ScrollingModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
