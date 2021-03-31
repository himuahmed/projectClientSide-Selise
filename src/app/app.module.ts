import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

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
    HomeModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
