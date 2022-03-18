import { Client } from "./client.model";
import { Item } from "./item.model";

export class Invoice {
  /**
   *
   */
  constructor(
    public id : number,
    public date : Date,
    public quantity : number,
    public total : number,
    public clientId : number,
    public itemId : number,
    public sellingPrice: number,
    public item?:Item,
    public client?: Client
  ) {}
}
