import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { DetailComponent } from './detail/detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SwServiceService } from './services/sw-service.service';
import { ListComponent } from './list/list.component';
import { MaterialModule } from './material/material.module';
import { RelatedItemComponent } from './related-item/related-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DetailComponent,
    ListComponent,
    RelatedItemComponent,
    ToolbarComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [SwServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
