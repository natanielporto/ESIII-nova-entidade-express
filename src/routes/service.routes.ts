import { Router } from 'express';
import ServiceRepository from '../repositories/ServiceRepository';
import CreateServiceService from '../services/CreateServiceService';

const serviceRouter = Router();
const serviceRepository = new ServiceRepository();

serviceRouter.get('/', (request, response) => {
  response.json(serviceRepository.listAll());
});

serviceRouter.get('/:price', (request, response) => {
  const { price } = request.params;

  if (serviceRepository.sortByPrice(Number(price)) === undefined) {
    response
      .status(400)
      .json('Nenhum serviço encontrado nessa faixa de valor.');
  }

  response.json(serviceRepository.sortByPrice(Number(price)));
});

serviceRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  if (!serviceRepository.findById(Number(id))) {
    response.status(400).json('Nenhum serviço encontrado com este valor.');
  }

  response.json(serviceRepository.findById(Number(id)));
});

serviceRouter.get('/:name', (request, response) => {
  const { name } = request.params;

  if (!serviceRepository.findByName(name)) {
    response.status(400).json('Nenhum serviço encontrado com este nome.');
  }

  response.json(serviceRepository.findByName(name));
});

// findByName;

export default serviceRouter;
