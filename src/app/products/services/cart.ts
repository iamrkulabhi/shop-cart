export class Cart {
  itemId: number;
  itemName: string;
  itemPrice: number;
  itemQty: number;
  itemTotal: number;

  constructor(
    itemId: number,
    itemName: string,
    itemPrice: number,
    itemQty: number
    ) {
      this.itemId = itemId;
      this.itemName = itemName;
      this.itemPrice = itemPrice;
      this.itemQty = itemQty;
      this.itemTotal = this.itemPrice * this.itemQty;
  }
}
