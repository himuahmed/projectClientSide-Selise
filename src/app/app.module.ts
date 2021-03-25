import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { BookModule } from './book/book.module';
import { HomeModule } from './home/home.module';

import { appRoutes } from './routes';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BookModule,
    HomeModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
