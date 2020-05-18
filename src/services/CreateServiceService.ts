// sanduícheíche

import ServiceRepository from '../repositories/ServiceRepository';
import Service from '../models/Service';

export default class CreateServiceService {
  private repository: ServiceRepository;

  constructor(repository: ServiceRepository) {
    this.repository = repository;
  }

  public execute({ id, description, name, lovers, price }: Service): Service {
    const service = this.repository.findById(id);
    if (service) {
      throw Error('Serviço já cadastrado');
    } else {
      const s = new Service(id, description, name, lovers, price);
      this.repository.addService(s);
      return s;
    }
  }
}
