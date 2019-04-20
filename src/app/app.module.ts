import { CartPage } from './../pages/cart/cart';

import { MenuPage } from './../pages/menu/menu';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {  IonicImageViewerModule } from 'ionic-img-viewer'
import { DetailsPageModule } from '../pages/details/details.module';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    CartPage
   
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DetailsPageModule,
    // j'ajoute IonicStorageModule a mes import et j'appel la methode.forRoot y complis dans le ts ou j'ai besoin de lui
    IonicStorageModule.forRoot(),
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    CartPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
