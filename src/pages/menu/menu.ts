import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Categorie } from '../../models/interface-categorie';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage: any;
  categories: Categorie[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.categories= [
      {
        title: "Vetements",
        description : "description",
        icon: "shirt"
      },
      {
        title: "Mackup & Accessoires",
        description : "description",
        icon: "bowtie"
      },
      {
        title: "Electronique",
        description : "description",
        icon: "phone-portrait"
      },
      {
        title: "Games",
        description : "description",
        icon: "game-controller-b"
      },
      {
        title: "Chaussures",
        description : "description",
        icon: "archive"
      }
    ]

    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
