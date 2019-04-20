import { itemCart } from './../../models/interface-itemCart';
import { Product } from './../../models/interface-products';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ToastController, AlertController, AlertOptions } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  cartItem: itemCart[];
  total: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public storage: Storage, public viewCtl: ViewController,
     public toast : ToastController, public arlCtl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage')
    //chaque fois que mon ma page est chargée je fais cette action
    this.storage.get("Cart")
      .then((data: itemCart[])=>{
        this.cartItem = data;
        //je parcours chaque element de mon
        this.cartItem.forEach((element: itemCart)=>{
          if(element.item.availability.type === 'Disponible en Magasin'){
            element.item.availability.feed = 0;
          }
          this.total += (element.item.availability.feed + element.item.price * element.qty)
        })
      })
      .catch(err=>{
        console.log(err);
      })
  }

  closeModal(): void {
    this.viewCtl.dismiss();
  }
  removeItem(article: itemCart, index: number): void {
    let options: AlertOptions =  {
      title : "Attention !",
      // utilisation des backticks pour integrer des expressions dans une chaine de caratere
      subTitle : `Etes-vous sur de vouloir retirer l'article ${article.item.title} ?`,
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Retirer',
          handler : ()=>{
            let price : number = article.item.price;
            let qty : number = article.qty;
            let feed : number = article.item.availability.feed;
            let myTotal : number = (feed+price)*qty;
            this.cartItem.splice(index, 1);
              // une fois que mon element à ete supprimer je fais un refresh de mes donnée grace à cette 
              this.storage.set("Cart", this.cartItem).then((data)=>{
                this.total -= myTotal;
                this.toast.create({
                  message: "Vous avez retirez un article du panier",
                  duration: 2000
                 
                }).present();
              }).catch((err)=>{
                console.log(err)
              })
          }
        },
      ]
    
    

  }
  this.arlCtl.create(options).present();
}

}