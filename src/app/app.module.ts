import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';

import { BookModule } from './book/book.module';


import { appRoutes } from './routes';
import { AuthenticationModule } from './authentication/authentication.module';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';



@NgModule({
  declarations: [	
    AppComponent,
      ToolbarComponent
   ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BookModule,
    CommonModule,
    AuthenticationModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatMenuModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
