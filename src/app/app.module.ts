import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SecteurPage } from '../pages/secteur/secteur';
import { PseudoPage } from '../pages/pseudo/pseudo';
import { TaskPage } from '../pages/task/task';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SecteurPage,
    PseudoPage,
    TaskPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SecteurPage,
    PseudoPage,
    TaskPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
