webpackJsonp([2],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, storage, viewCtl, toast, arlCtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.viewCtl = viewCtl;
        this.toast = toast;
        this.arlCtl = arlCtl;
        this.total = 0;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad CartPage');
        //chaque fois que mon ma page est chargée je fais cette action
        this.storage.get("Cart")
            .then(function (data) {
            _this.cartItem = data;
            //je parcours chaque element de mon
            _this.cartItem.forEach(function (element) {
                if (element.item.availability.type === 'Disponible en Magasin') {
                    element.item.availability.feed = 0;
                }
                _this.total += (element.item.availability.feed + element.item.price * element.qty);
            });
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    CartPage.prototype.closeModal = function () {
        this.viewCtl.dismiss();
    };
    CartPage.prototype.removeItem = function (article, index) {
        var _this = this;
        var options = {
            title: "Attention !",
            // utilisation des backticks pour integrer des expressions dans une chaine de caratere
            subTitle: "Etes-vous sur de vouloir retirer l'article " + article.item.title + " ?",
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel'
                },
                {
                    text: 'Retirer',
                    handler: function () {
                        var price = article.item.price;
                        var qty = article.qty;
                        var feed = article.item.availability.feed;
                        var myTotal = (feed + price) * qty;
                        _this.cartItem.splice(index, 1);
                        // une fois que mon element à ete supprimer je fais un refresh de mes donnée grace à cette 
                        _this.storage.set("Cart", _this.cartItem).then(function (data) {
                            _this.total -= myTotal;
                            _this.toast.create({
                                message: "Vous avez retirez un article du panier",
                                duration: 2000
                            }).present();
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                },
            ]
        };
        this.arlCtl.create(options).present();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/home/sagesse/ionic/Angular_P/ciphTeck/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title color="primary">Mon Panier</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n<ion-list>\n  <button ion-item *ngFor="let article of cartItem, let i = index ">\n    <ion-thumbnail item-left>\n      <img [src]="article.item.pictures[0]" imageViewer>\n    </ion-thumbnail>\n    <h2>{{article.item.title}}</h2>\n    <p>\n      <ion-badge color="secondary">{{article.qty}}</ion-badge> x {{article.item.price | currency}}\n    </p>\n    <p *ngIf="article.item.availability.feed"> \n      Livraison: {{article.item.availability.feed | currency}}\n    </p>\n    <p>Total: {{ ((article.qty*article.item.price)+article.item.availability.feed)| currency }} </p>\n    <button ion-button>\n      <ion-icon name="mail"> Contacter </ion-icon>&nbsp;\n    </button>\n    <!--j\'ai ma methode article et je lui passe en paramettre article et un index-->\n    <button  (click)="removeItem(article, i)" ion-button item-right icon-only clear color="danger">\n      <ion-icon name="remove-circle"></ion-icon>\n    </button>\n  </button>\n\n</ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <button ion-button block (click)="closeModal()">Fermer</button>\n      </ion-col>\n      <ion-col>\n\n        <button ion-button block color="secondary" outline>Panier {{total | currency}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/home/sagesse/ionic/Angular_P/ciphTeck/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["w" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["u" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */];
        this.categories = [
            {
                title: "Vetements",
                description: "description",
                icon: "shirt"
            },
            {
                title: "Mackup & Accessoires",
                description: "description",
                icon: "bowtie"
            },
            {
                title: "Electronique",
                description: "description",
                icon: "phone-portrait"
            },
            {
                title: "Games",
                description: "description",
                icon: "game-controller-b"
            },
            {
                title: "Chaussures",
                description: "description",
                icon: "archive"
            }
        ];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/sagesse/ionic/Angular_P/ciphTeck/src/pages/menu/menu.html"*/'<ion-menu [content]="myContent">\n<ion-header>\n  <ion-navbar>\n    <ion-title>Menu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullsceen>\n <ion-list>\n   <ion-item-divider color="primary">\n     <h3>Categories</h3>\n   </ion-item-divider>\n   <button menuClose ion-item *ngFor="let category of categories" >\n      <h3>{{category.title}}</h3>\n      <p>{{ category.description}}</p>\n      <ion-icon item-left color="primary" [name]="category.icon"></ion-icon>\n   </button>\n   <ion-item-divider color="primary">\n      <h3>Mon Compte</h3>\n    </ion-item-divider>\n    <button menuClose ion-item>\n        <h3>Shopping App</h3>\n        <p>Bienvenue</p>\n        <ion-icon item-left color="primary" name="contact"></ion-icon>\n     </button>\n     <button menuClose ion-item>\n        <h3>Boite de réception</h3>\n        <p>Consulter vos messages et notifications</p>\n        <ion-icon item-left color="primary" name="mail"></ion-icon>\n     </button>\n     <button menuClose ion-item>\n        <h3>Mon Panier</h3>\n        <p>Consultez votre panier</p>\n        <ion-icon item-left color="primary" name="cart"></ion-icon>\n     </button>\n     <button menuClose ion-item>\n        <h3>A propos</h3>\n        <ion-icon item-left color="primary" name="help-circle"></ion-icon>\n     </button>\n     <button menuClose ion-item>\n        <h3>Déconnexion</h3>\n        <ion-icon item-left color="primary"  name="share-alt"></ion-icon>\n     </button>\n </ion-list>\n \n\n</ion-content>\n</ion-menu>\n<ion-nav id="nav" #myContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/home/sagesse/ionic/Angular_P/ciphTeck/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* NavParams */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 138;

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		414,
		1
	],
	"../pages/details/details.module": [
		182
	],
	"../pages/menu/menu.module": [
		415,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 181;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic3_star_rating__["a" /* StarRatingModule */]
            ],
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, event, toast, modal, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.toast = toast;
        this.modal = modal;
        this.storage = storage;
        this.producDetail = this.navParams.get('data');
        this.event.subscribe('star-rating-changed', function (notes) {
            console.log('voici la note chosie', notes);
        });
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    // methode pour ajouter les articles au panier
    DetailsPage.prototype.addToPanier = function (productDetail) {
        var _this = this;
        var added = false;
        // si le panier est vide
        this.storage.get("Cart").then(function (data) {
            //si le panier est vide
            if (data === null || data.length === 0) {
                data = [];
                data.push({
                    item: productDetail,
                    qty: 1,
                    amount: productDetail.price
                });
            }
            else {
                //si le panier n'est pas vide et contient l'article
                for (var i = 0; i < data.length; i++) {
                    var element = data[i];
                    if (productDetail.id === element.item.id) {
                        element.qty += 1;
                        element.amount += productDetail.price;
                        added = true;
                    }
                }
                //si le panier n'est pas vide qu'il ne contient pas d'article
                if (!added) {
                    data.push({
                        item: productDetail,
                        qty: 1,
                        amount: productDetail.price
                    });
                }
            }
            _this.storage.set("Cart", data).then(function (data) {
                var options = {
                    message: "Votre Panier a été mis à jour",
                    duration: 1900,
                    showCloseButton: true,
                    closeButtonText: "Fermer"
                };
                _this.toast.create(options).present();
            })
                .catch(function (err) {
                console.log(err);
            });
        });
    };
    //methode pour voir les articles que j'ai selectionner
    DetailsPage.prototype.OpenCart = function () {
        this.modal.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]).present();
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/home/sagesse/ionic/Angular_P/ciphTeck/src/pages/details/details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>{{producDetail.title}}</ion-title>\n    <ion-buttons end>\n      <button ion-button><ion-icon name="share"></ion-icon></button>  \n      <button ion-button (click)="OpenCart()"><ion-icon name="cart"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen>\n <ion-card>\n    <ion-slides pager autoplay="1500" loop="true">\n        <ion-slide *ngFor="let prod of producDetail.pictures" >\n            <img class="myImg"src="{{prod}}">\n        </ion-slide>\n       </ion-slides>\n       <ion-card-content>\n         <ion-card-title>\n            <p>Prix: {{producDetail.price | currency}}</p>\n    <p> Notes :\n      <span *ngIf="producDetail.averageStar >=1 ">\n          <ion-icon class="yellow" name="star" ></ion-icon>\n      </span>\n      <span *ngIf="producDetail.averageStar >=2 ">\n          <ion-icon class="yellow" name="star" color="yellow"></ion-icon>\n      </span>\n      <span *ngIf="producDetail.averageStar >=3 ">\n          <ion-icon class="yellow" name="star" color="yellow"></ion-icon>\n      </span>\n      <span *ngIf="producDetail.averageStar >=4 ">\n          <ion-icon class="yellow" name="star" color="yellow"></ion-icon>\n      </span>\n      <span *ngIf="producDetail.averageStar >=5 ">\n          <ion-icon class="yellow" name="star" color="yellow"></ion-icon>\n      </span>\n    </p>\n    <p>{{producDetail.description}}</p>\n           <ion-chip color="primary">\n             <ion-label>\n              {{producDetail.category}}\n             </ion-label>\n           </ion-chip>\n           <!--si le produit detail est disponible tu m\'affiche le label vue que c\'est un booleen-->\n           <ion-chip color="secondary" *ngIf="producDetail.availability.available" >\n              <ion-label>\n               Disponible\n              </ion-label>\n            </ion-chip>\n             <!--si le produit detail est disponible tu m\'affiche le label vue que c\'est un booleen-->\n           <ion-chip color="danger" *ngIf="!producDetail.availability.available" >\n              <ion-label>\n               Non Disponible\n              </ion-label>\n            </ion-chip>\n\n            <ion-chip>\n                <ion-label>\n                 {{producDetail.availability.type}}\n                </ion-label>\n              </ion-chip>\n\n\n              <ion-chip>\n                  <ion-label>\n                   {{producDetail.state}}\n                  </ion-label>\n                </ion-chip>\n              <ion-chip>\n                  <ion-label>\n                   {{producDetail.city}}\n                  </ion-label>\n                </ion-chip>\n         </ion-card-title>\n         <ion-grid>\n           <ion-row>\n             <ion-col col-9 small> \n              <ionic3-star-rating \n              activeIcon = "ios-star"\n              defaultIcon = "ios-star-outline"\n              activeColor = "#f4e242"\n              defaultColor = "#f4f4f4"\n              readonly = "false"\n              [rating]= "3">\n              </ionic3-star-rating>\n             </ion-col>\n             <ion-col col-3>\n               <button ion-button padding small round color="secondary">Noter</button>\n             </ion-col>\n           </ion-row>\n         </ion-grid>\n       </ion-card-content>\n </ion-card>\n \n</ion-content>\n<ion-footer>\n    <ion-row>\n        <!--que cette colonne saute une largeur et mesure 10-->\n        <ion-col >\n          <button ion-button block small large class="monFooter" color="danger">\n    \n            <ion-icon  (click)="addToPanier(producDetail)" name="cart">&nbsp;Ajouter au panier</ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n</ion-footer>\n'/*ion-inline-end:"/home/sagesse/ionic/Angular_P/ciphTeck/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_details__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, alertCtl, imageView, actionship) {
        this.navCtrl = navCtrl;
        this.alertCtl = alertCtl;
        this.imageView = imageView;
        this.actionship = actionship;
        this.Articles = [
            {
                title: 'Jacket',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                price: 45,
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
                price: 25,
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
                price: 29,
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
                price: 23,
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
                price: 36,
                category: 'Chaussures',
                createAt: new Date(),
                state: 'neuf',
                city: 'Brazzaville',
                id: '5',
                averageStar: 4,
                availability: {
                    available: true,
                    type: 'livraison',
                    feed: 20
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
    HomePage.prototype.showDetail = function (art) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__details_details__["a" /* DetailsPage */], { data: art });
    };
    HomePage.prototype.showImage = function (picture, event) {
        event.stopPropagation();
        this.imageView.create(picture).present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/sagesse/ionic/Angular_P/ciphTeck/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <ion-title>\n      Appli shopping\n    </ion-title>\n    <button ion-button="" menuToggle="">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<ion-list>\n  <button  (click)="showDetail(art)" ion-item *ngFor="let art of Articles" >\n    <ion-thumbnail  item-start>\n    <img src="{{art.pictures[0]}}" #picture (click)="showImage(picture, $event)">\n    </ion-thumbnail>\n    <h3>{{art.title}}</h3>\n    <p>{{art.description}}</p>\n    <p>{{art.price | currency}}</p>\n    <p>\n      <span *ngIf="art.averageStar >=1 ">\n          <ion-icon class="yellow" name="star" ></ion-icon>\n      </span>\n      <span *ngIf="art.averageStar >=2 ">\n          <ion-icon class="yellow" name="star" color="yellow"></ion-icon>\n      </span>\n      <span *ngIf="art.averageStar >=3 ">\n          <ion-icon class="yellow" name="star" color="yellow"></ion-icon>\n      </span>\n      <span *ngIf="art.averageStar >=4 ">\n          <ion-icon class="yellow" name="star" color="yellow"></ion-icon>\n      </span>\n      <span *ngIf="art.averageStar >=5 ">\n          <ion-icon class="yellow" name="star" color="yellow"></ion-icon>\n      </span>\n    </p>\n</button>\n</ion-list>\n\n</ion-content>\n<ion-footer>\n    <ion-row>\n        <!--que cette colonne saute une largeur et mesure 10-->\n        <ion-col >\n          <button ion-button  block small class="monFooter" large color="danger">\n            <ion-icon name="camera">&nbsp;Vendre vos biens</ion-icon>\n          </button>\n        </ion-col>\n      </ion-row>\n</ion-footer>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!--\n<ion-content padding>\n  <p>\n  C\'est ici que j\'affiche tous les articles à vendre....\n  </p>\n  \n  <ul *ngFor="let art of Article" >\n    --je passe un ecouteur d\'evenement à ma liste--\n    <li (click)="showDetail(art)"> Marque :{{art.nom}} -  Prix :{{art.prix}}   </li>\n  </ul>\n \n  <ion-list>\n    <button ion-item *ngFor="let art of Article"  (click)="showDetail(art)">{{art.nom}} - {{art.prix}}</button>\n  </ion-list>\n  <button ion-button  (click)="showClassAlert()">Classic Alert</button>\n  <button ion-button  (click)="showIonicAlert()">Ionic Alert</button><br>\n  <button ion-button  (click)="showAction()">Ionic Action</button>\n</ion-content>\n\n<ion-footer>\n  <p class="monFooter">je suis au pied de page...</p>\n</ion-footer>\n -->'/*ion-inline-end:"/home/sagesse/ionic/Angular_P/ciphTeck/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* ImageViewerController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */]])
    ], HomePage);
    return HomePage;
}());

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
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(259);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_cart_cart__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu_menu__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_details_details_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_storage__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_cart_cart__["a" /* CartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__pages_details_details_module__["DetailsPageModule"],
                // j'ajoute IonicStorageModule a mes import et j'appel la methode.forRoot y complis dans le ts ou j'ai besoin de lui
                __WEBPACK_IMPORTED_MODULE_11__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ionic_img_viewer__["b" /* IonicImageViewerModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["l" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_1__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_cart_cart__["a" /* CartPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["m" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_menu_menu__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_menu_menu__["a" /* MenuPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sagesse/ionic/Angular_P/ciphTeck/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/sagesse/ionic/Angular_P/ciphTeck/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[251]);
//# sourceMappingURL=main.js.map