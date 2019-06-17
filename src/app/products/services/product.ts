export class Product {

  id: number;
  name: string;
  sku: string;
  description: string;
  price: number;
  stock: number;
  productImage: string;

  constructor(
    id: number,
    name: string,
    sku: string,
    description: string,
    price: number,
    stock: number,
    productImage: string
    ) {
      this.id = id;
      this.name = name;
      this.sku = sku;
      this.description = description;
      this.price = price;
      this.stock = stock;
      this.productImage = productImage;
    }

}
