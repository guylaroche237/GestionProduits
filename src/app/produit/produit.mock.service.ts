import {Injectable} from '@angular/core';
import {Produit} from '../shared/produit';

@Injectable()
export class ProduitMockService{

  private PRODUITS:Produit[] = [];

  constructor(){
    let p1:Produit = new Produit('livre',4,250);
    let p2:Produit = new Produit('CAHIER',3,450);
    let p3:Produit = new Produit('BIC',40,4000);
    let p4:Produit = new Produit('ARDOISE',5,2500);

    this.PRODUITS.push(p1);
    this.PRODUITS.push(p2);
    this.PRODUITS.push(p3);
    this.PRODUITS.push(p4);
  }

  public getProduits() :Produit[]{
    return this.PRODUITS;
  }
}
