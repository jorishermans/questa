import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, PLATFORM_ID, Inject, APP_ID } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuestionClientService } from './services/question-client.service';
import { QuestionsComponent } from './questions/questions.component';
import { AddQuestionsComponent } from './questions/add-questions.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UniversalInterceptor } from './services/universal.interceptor';
import { isPlatformBrowser } from '@angular/common';
import { MaterialUsedModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './questions/question.component';
import { AnswersComponent } from './questions/answers.component';
import { TransferHttpCacheModule } from '@nguniversal/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuestionsComponent,
    AnswersComponent,
    AddQuestionsComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'questa-app'}),
    BrowserTransferStateModule,
    HttpClientModule,
    MaterialUsedModule,
    BrowserAnimationsModule,
    FormsModule,
    TransferHttpCacheModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'questions', component: QuestionsComponent, pathMatch: 'full'},
      { path: 'add', component: AddQuestionsComponent, pathMatch: 'full'},
      { path: 'question/:id', component: QuestionComponent},
      { path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ])
  ],
  providers: [QuestionClientService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UniversalInterceptor,
      /* Multi is important or you will delete all the other interceptors */
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
