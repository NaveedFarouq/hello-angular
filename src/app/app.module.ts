import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { TabComponent } from './tab/tab.component';
import { ChildComponent } from './child/child.component';
import { CommentListComponent } from './comment-list/comment-list.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    TabComponent,
    ChildComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
