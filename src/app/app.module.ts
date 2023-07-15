import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LocateComponent } from './locate/locate.component';
import { InfoComponent } from './info/info.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PosterComponent } from './poster/poster.component';
import { QuestionsComponent } from './questions/questions.component';
import { SocialComponent } from './social/social.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { LayoutModule } from '@angular/cdk/layout';
import { EachReviewComponent } from './reviews/each-review/each-review.component';
import { EachQuestionComponent } from './questions/each-question/each-question.component';
import { HttpClientModule } from '@angular/common/http';

import { NgParticlesModule } from "ng-particles";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    NavbarComponent,
    LocateComponent,
    InfoComponent,
    ReviewsComponent,
    PosterComponent,
    QuestionsComponent,
    SocialComponent,
    SubscribeComponent,
    EachReviewComponent,
    EachQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    LayoutModule,
    NgParticlesModule,
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
