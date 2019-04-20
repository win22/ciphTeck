export interface Product {
    // pour le nom
    title: string;
    description : string;
    pictures : string[];
    id: string;
    //le prix
    price: number;
    category: string;
    // l'etat actuelle du produit
    state: string;
    //date de creation
    createAt: Date;
    availability: Availability;
    city: string;
    // la note du produit
    averageStar: number;

}

export interface Availability{
    // pour voir si l'article est dispo
    available : boolean;
    // mode de livraison
    type: string;
    // frais de livraison
    feed?: number;
}