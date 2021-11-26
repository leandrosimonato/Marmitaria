import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageListComponent } from './packages/package-list/package-list.component';
import { PackageDetailsComponent } from './packages/package-details/package-details.component';
import { PackageItemComponent } from './packages/package-list/package-item/package-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodAditComponent } from './food-list/food-adit/food-adit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackagesComponent,
    PackageListComponent,
    PackageDetailsComponent,
    PackageItemComponent,
    FoodListComponent,
    FoodAditComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
