import { request } from 'express';
import Service from '../models/Service';

export default class ServiceRepository {
  private services: Array<Service>;

  constructor() {
    this.services = [
      {
        id: 1,
        name: 'reparodetv.',
        description: 'Conserto de televisões de todos os tipos.',
        price: 200,
        lovers: 0,
      },
      {
        id: 2,
        name: 'Instalação de piscina.',
        description: 'O andar que você quiser.',
        price: 2000,
        lovers: 10,
      },
      {
        id: 3,
        name: 'archlinux',
        description: 'Só para clientes Vips',
        price: 500,
        lovers: 0,
      },
    ];
  }

  public listAll(): Array<Service> {
    return this.services;
  }

  public sortByPrice(price: number): Service | undefined {
    return this.services.filter(s => s.price <= price);
  }

  public findById(id: number): Array<Service> | undefined {
    return this.services.filter(v => v.id === id);
  }

  public findByName(name: string): Service | undefined {
    return this.services.find(s => s.name === name);
  }

  public addService({
    id,
    name,
    description,
    price,
    lovers,
  }: Service): Service {
    const service = new Service(id, name, description, price, lovers);
    this.services.push(service);
    return service;
  }
}
