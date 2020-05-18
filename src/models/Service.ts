export default class Service {
  id: number;

  name: string;

  description: string;

  price: number;

  lovers: number;

  constructor(
    id: number,
    name: string,
    description: string,
    price: number,
    lovers: number,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.lovers = lovers;
  }
}
