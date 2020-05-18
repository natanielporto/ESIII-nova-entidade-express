import { request } from 'express';
import Product from '../models/Product';

export default class ProductRepository {
  private products: Array<Product>;

  constructor() {
    this.products = [
      {
        buyPrice: 400,
        code: 1,
        description: 'máquina de cortar cabelo',
        lovers: 3,
        sellPrice: 800,
        tags: [],
        id: '1',
      },
      {
        buyPrice: 200,
        code: 2,
        description: 'ferro de passar roupas',
        lovers: 10,
        sellPrice: 600,
        tags: [],
        id: '2',
      },
      {
        buyPrice: 50,
        code: 3,
        description: 'computador da maçã',
        lovers: 20000000,
        sellPrice: 15000,
        tags: [],
        id: '3',
      },
      {
        buyPrice: 400,
        code: 4,
        description: 'windows vista',
        lovers: 0,
        sellPrice: 401,
        tags: [],
        id: '4',
      },
    ];
  }

  public findAll(): Array<Product> {
    return this.products;
  }

  public findByCode(code: number): Product | undefined {
    return this.products.find(v => v.code === code);
  }

  public findByLowerPrice(sellPrice: number): Array<Product> | undefined {
    return this.products.filter(v => v.sellPrice < sellPrice);
  }

  public findExactPrice(sellPrice: number): Product | undefined {
    return this.products.find(v => v.sellPrice === sellPrice);
  }

  public alterPrice(id: number): Array<Product> | undefined {
    return this.products.filter(v => Number(v.id) === id);
  }

  public removeProduct(id: number): Product | undefined {
    const deleted = this.products.filter(v => Number(v.id) !== id);
    this.products = deleted;
    return this.products;
  }

  public save({
    buyPrice,
    code,
    description,
    lovers,
    sellPrice,
    tags,
  }: Product): Product {
    const product = new Product({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
    });
    this.products.push(product);
    return product;
  }
}
