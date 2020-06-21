import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LearnFeedPage } from '../pages/learn-feed/learn-feed';
import { ContactoPage } from '../pages/learn-feed/contacto';

@Component({
  selector: 'app-root',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make LearnFeedPage the root (or first) page
  rootPage: any = LearnFeedPage;

  pages: Array<{title: string, component: any, params: any}>;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public menu: MenuController,
    public app: App
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      {
        title: 'Todo',
        component: LearnFeedPage,
        params: {
          query: 'todos'
        }
      },
      {
        title: 'Galeria',
        component: LearnFeedPage,
        params: {
          query: 'basic'
        }
      },
      {
        title: 'Contacto',
        component: ContactoPage,
        params: {
          query: 'core'
        }
      }
    ];
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component, page.params);
  }
}
