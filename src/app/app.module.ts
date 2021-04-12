import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';

import { AppComponent } from './app.component';
import { BookModule } from './book/book.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AuthenticationModule } from './authentication/authentication.module';

import { appRoutes } from './routes';
import { environment } from '../environments/environment';



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
    MatMenuModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
