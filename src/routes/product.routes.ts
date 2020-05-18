import { Router } from 'express';
import ProductRepository from '../repositories/ProductRepository';
import CreateProductService from '../services/CreateProductService';

const productRouter = Router();
const productRepository = new ProductRepository();

productRouter.get('/', (request, response) => {
  response.json(productRepository.findAll());
});

productRouter.get('/:sellPrice', (request, response) => {
  const { sellPrice } = request.params;

  if (productRepository.findByLowerPrice(Number(sellPrice)) === []) {
    response
      .status(400)
      .json('Nenhum produto encontrado nessa faixa de valor.');
  }

  response.json(productRepository.findByLowerPrice(Number(sellPrice)));
});

productRouter.get('/search/:sellPrice', (request, response) => {
  if (!productRepository.findExactPrice(Number(request.params.sellPrice))) {
    response.status(400).json('Não existem produtos com o valor informado.');
  }

  response.json(
    productRepository.findExactPrice(Number(request.params.sellPrice)),
  );
});

productRouter.get('/:code', (request, response) => {
  const { code } = request.params;

  if (!productRepository.findByCode(Number(code))) {
    response
      .status(400)
      .json('Nenhum produto cadastrado com este código. Tente novamente.');
  }

  response.json(productRepository.findByCode(Number(code)));
});

productRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  if (productRepository.alterPrice(Number(id)) === undefined) {
    response
      .status(400)
      .json('Nenhum produto encontrado com esse código para ser alterado.');
  }
});

productRouter.delete('/:id', (request, response) => {
  const { id } = request.params;
  if (productRepository.removeProduct(Number(id)) === undefined) {
    response
      .status(400)
      .json('Nenhum produto encontrado com esse código para ser deletado.');
  }

  response.json(productRepository.removeProduct(Number(id)));
});

productRouter.post('/', (request, response) => {
  try {
    const service = new CreateProductService(productRepository);
    const {
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    } = request.body;
    const produto = service.execute({
      buyPrice,
      code,
      description,
      lovers,
      sellPrice,
      tags,
      id,
    });
    return response.status(201).json(produto);
  } catch (err) {
    return response.status(400).json({ Erro: err.message });
  }
});

export default productRouter;
