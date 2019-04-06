import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { TabComponent } from './tab/tab.component';
import { ChildComponent } from './child/child.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import { CounterComponent } from './counter/counter.component';
import { CommmentService } from './commment.service';
import { CommentsList2Component } from './comments-list2/comments-list2.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    TabComponent,
    ChildComponent,
    CommentListComponent,
    CommentItemComponent,
    CounterComponent,
    CommentsList2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [CommmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
