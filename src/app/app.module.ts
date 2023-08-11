import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './pages/main-view/main-view.component';
import { AddItemsComponent } from './pages/main-view/add-items/add-items.component';
import { AddResearchComponent } from './pages/main-view/add-research/add-research.component';
import { AddIdeasComponent } from './pages/main-view/add-ideas/add-ideas.component';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    AddItemsComponent,
    AddResearchComponent,
    AddIdeasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
