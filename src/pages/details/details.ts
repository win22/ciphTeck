import { itemCart } from './../../models/interface-itemCart';
import { Product } from './../../models/interface-products';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController, ToastOptions, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  // produitDeatil reçois maintenant toutes les attribus du model producr
  producDetail: Product;
  constructor(public navCtrl: NavController,
     public navParams: NavParams, 
     public event : Events, 
     public toast : ToastController,
     public modal : ModalController,
     public storage: Storage) {
    this.producDetail = this.navParams.get('data');
    this.event.subscribe('star-rating-changed', (notes)=>{
      console.log('voici la note chosie', notes);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  // methode pour ajouter les articles au panier
  addToPanier(productDetail: Product): void{  
    let added : boolean = false;
    
    // si le panier est vide
    this.storage.get("Cart").then((data: itemCart[])=>{
      //si le panier est vide
     
      if(data === null || data.length === 0){
        data = [];
        data.push({
          item : productDetail,
          qty : 1,
          amount : productDetail.price
        })
      }
      else{
        //si le panier n'est pas vide et contient l'article
        for (let i = 0; i < data.length; i++) {
          const element : itemCart = data[i];
          if(productDetail.id === element.item.id){
            element.qty += 1;
            element.amount += productDetail.price;
            added = true;
          }
        }
        //si le panier n'est pas vide qu'il ne contient pas d'article
        if(!added){
       
          data.push({
            item : productDetail,
            qty : 1,
            amount : productDetail.price
          })
        }
      }
      this.storage.set("Cart", data).then(
        data =>{
          let options : ToastOptions = {
            message: "Votre Panier a été mis à jour",
            duration: 1900,
            showCloseButton: true,
            closeButtonText: "Fermer"
          };
          this.toast.create(options).present();
        })
        .catch(err => {
          console.log(err) 
        })
    })

  }

  //methode pour voir les articles que j'ai selectionner
  OpenCart(): void {
    this.modal.create(CartPage).present();

  }
 
  
  }



