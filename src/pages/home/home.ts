import { Product } from './../../models/interface-products';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController, AlertController, AlertOptions, ActionSheetController, ActionSheetOptions } from 'ionic-angular';
import { ImageViewer, ImageViewerController } from 'ionic-img-viewer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Articles: Product[];
  
  constructor(public navCtrl: NavController, 
    public alertCtl: AlertController, 
    public imageView : ImageViewerController,
    public actionship: ActionSheetController) 
    {
      this.Articles = [
        {
          title: 'Jacket',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          price : 45,
          category: 'Vetements',
          createAt: new Date(),
          state: 'neuf',
          city: 'Brazzaville',
          id: '1',
          averageStar: 4,
          availability: {
            available: true,
            type: 'Disponible en Magasin'
          },
          pictures: [
            'assets/imgs/Product3/jacket1.jpeg',
            'assets/imgs/Product3/jacket2.jpeg',
            'assets/imgs/Product3/jacket3.jpeg',
            'assets/imgs/Product3/jacket4.jpeg'
          ]
        },
        {
          title: 'Maquillage',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, laborum',
          price : 25,
          category: 'Mackup & Accessoires',
          createAt: new Date(),
          state: 'neuf',
          city: 'Dolisie',
          id: '2',
          averageStar: 3,
          availability: {
            available: true,
            type: 'livraison',
            feed: 10
          },
          pictures: [
            'assets/imgs/Product2/Mackup1.Jpg',
            'assets/imgs/Product2/Mackup2.jpg',
            'assets/imgs/Product2/Mackup3.jpg',
            'assets/imgs/Product2/Mackup4.jpeg'
          ]
        },
        {
          title: 'Telephone',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,  mollit anim id est laborum',
          price : 29,
          category: 'Electronique',
          createAt: new Date(),
          state: 'neuf',
          city: 'Dolisie',
          id: '3',
          averageStar: 2,
          availability: {
            available: true,
            type: 'livraison',
            feed: 14
          },
          pictures: [
            'assets/imgs/Product4/phone1.jpeg',
            'assets/imgs/Product4/phone2.jpeg',
            'assets/imgs/Product4/phone3.jpeg',
            'assets/imgs/Product4/phone4.jpeg'
          ]
        },
        {
          title: 'PlayStations',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,   eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          price : 23,
          category: 'Games',
          createAt: new Date(),
          state: 'neuf',
          city: 'Pointe-Noir',
          id: '4',
          averageStar: 5,
          availability: {
            available: true,
            type: 'Disponible en Magasin'
          },
          pictures: [
            'assets/imgs/Product5/ps1.jpg',
            'assets/imgs/Product5/ps2.jpg',
            'assets/imgs/Product5/ps3.jpg',
            'assets/imgs/Product5/ps4.jpg'
          ]
        },
        {
          title: 'Bascket',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          price : 36,
          category: 'Chaussures',
          createAt: new Date(),
          state: 'neuf',
          city: 'Brazzaville',
          id: '5',
          averageStar: 4,
          availability: {
            available: true,
            type: 'livraison',
            feed : 20
          },
          pictures: [
            'assets/imgs/Product1/presto.jpeg',
            'assets/imgs/Product1/presto2.jpeg',
            'assets/imgs/Product1/presto3.jpeg',
            'assets/imgs/Product1/presto4.jpeg'
          ]
        }
      ];

    }
    showDetail(art: Product): void{
      this.navCtrl.push(DetailsPage, {data: art});
    }

    showImage(picture: any, event) : void {
      event.stopPropagation();
      this.imageView.create(picture).present();    }
}

































    /** avant dans le constructeur
    this.Article = [
      { nom: 'Televison', prix: 145, details: 'Lorem ipsum de televison, Lorem ipsum dolor  de televison, Lorem ipsum sit de televison' },
      { nom: 'Televison', prix: 135 ,details: 'Lorem ipsum de televison, Lorem ipsum dolor  de televison, Lorem ipsum sit de televison'},
      { nom: 'Sac à Dos', prix: 56,  details: 'Lorem ipsum de Sac à Dos, Lorem ipsum dolor  de Sac à dos, Lorem ipsum sit de Sac à dos' },
      { nom: 'PC', prix: 149,  details: 'Lorem ipsum de PC, Lorem ipsum dolor  de PC, Lorem ipsum sit de pc' } 
    ]*/


  /** 
  // pour passer d'une page une autre
  showDetail(data: any): void  {
    this.navCtrl.push(DetailsPage, {data: data});
  }

  showData(data: any): void{
    console.log('data is', data)
  }

  showClassAlert(): void{
    alert('Je suis une alert classique');
  }

  showIonicAlert(): void{
    let options : AlertOptions = {
      title : 'Je suis le titre',
      subTitle : 'ça marche',
      message : 'Je suis le message',
      enableBackdropDismiss : false,
      buttons :[
        {
            text: 'Annuler',
            role : 'cancel'
        },
        {
            text: 'Btn_console',
            handler: ()=>{
              console.log('click reussi !');
            }
        }
      ]
    };
    this.alertCtl.create(options).present();
  };

  showAction(): void {
      let options: ActionSheetOptions = {
        title: 'voici les titres',
        subTitle: 'Voici les sous titres',enableBackdropDismiss : false,
        buttons :[
          {
              text: 'Annuler',
              role : 'cancel'
          },
          {
              text: 'Action 2',
              handler: ()=>{
                console.log('click reussi 2 !');
              }
          },
          {
              text: 'Action 3',
              handler: ()=>{
                console.log('click reussi 3 !');
              }
          }
        ]
      }
      this.alertCtl.create(options).present();
       
  }*/

